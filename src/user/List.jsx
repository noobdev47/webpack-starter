import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import UserService from '../api/user.service'

const List = () => {
	const [users, setUsers] = useState([])

	const fetchUsers = async () => {
		const response = await UserService.list()

		if (response.data) setUsers(response.data)
	}

	useEffect(() => {
		fetchUsers()

		return () => {
			setUsers([])
		}
	}, [])

	return (
		<div className='d-flex align-items-center justify-content-center '>
			<table>
				<thead>
					<tr>
						<td>Name</td>
						<td>Username</td>
						<td>E-mail</td>
					</tr>
				</thead>
				<tbody>
					{users.length === 0 ? (
						<p className='text-center'>No Users</p>
					) : (
						users.map(user => (
							<tr>
								<td className='mr-2'>
									<Link to={`/detail-user/${user.id}`}>{user.name}</Link>
								</td>
								<td className='mr-2'>{user.username}</td>
								<td className='mr-2'>{user.email}</td>
							</tr>
						))
					)}
				</tbody>
			</table>
		</div>
	)
}

export default List
