import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import UserService from '../api/user.service'

const Detail = () => {
	const { id } = useParams()

	const [user, setUser] = useState({})

	const fetchUser = async () => {
		const response = await UserService.get(id)

		if (response.data) setUser(response.data)
	}

	useEffect(() => {
		fetchUser()
	}, [])
	
	return (
		<div className='d-flex align-items-center justify-content-center flex-column'>
			<p>Name: {user.name}</p>
			<p>Username: {user.username}</p>
			<p>E-mail: {user.email}</p>
		</div>
	)
}

export default Detail
