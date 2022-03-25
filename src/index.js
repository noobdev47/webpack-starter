import App from './App'
import React from 'react'
import Layout from './layout'
import List from './user/List'
import ReactDOM from 'react-dom'
import Detail from './user/Detail'
import 'bootstrap/dist/css/bootstrap.min.css'
import regeneratorRuntime from 'regenerator-runtime'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route path='/home' element={<App />} />
					<Route path='/list-users' element={<List />} />
					<Route path='/detail-user/:id' element={<Detail />} />
				</Route>
			</Routes>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root')
)
