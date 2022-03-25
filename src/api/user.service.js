import axios from 'axios'

const UserService = {
	list: () => {
		return axios
			.get('https://jsonplaceholder.typicode.com/users')
			.then(res => {
				return res
			})
			.catch(err => {
				return err
			})
	},
	get: id => {
		return axios
			.get(`https://jsonplaceholder.typicode.com/users/${id}`)
			.then(res => {
				return res
			})
			.catch(err => {
				return err
			})
	},
}

export default UserService
