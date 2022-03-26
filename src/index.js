import ReactDOM from 'react-dom'
import React, { lazy, Suspense } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import regeneratorRuntime from 'regenerator-runtime'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const App = lazy(() => import('./App'))
const Layout = lazy(() => import('./layout'))
const List = lazy(() => import('./user/List'))
const Detail = lazy(() => import('./user/Detail'))

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<Suspense fallback={<div>Loading...</div>}>
				<Routes>
					<Route path='/' element={<Layout />}>
						<Route path='/home' element={<App />} />
						<Route path='/list-users' element={<List />} />
						<Route path='/detail-user/:id' element={<Detail />} />
					</Route>
				</Routes>
			</Suspense>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root')
)
