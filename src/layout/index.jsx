import { Link, Outlet } from 'react-router-dom'

const Layout = ({ children }) => {
	return (
		<div className='d-flex flex-column'>
			<div>
				<ul className='nav nav-pills nav-fill d-flex flex-row'>
					<li className='nav-item'>
						<Link className='nav-link' aria-current='page' to='/home'>
							Home
						</Link>
					</li>
					<li className='nav-item'>
						<Link className='nav-link' to='/list-users'>
							List Users
						</Link>
					</li>
				</ul>
			</div>
			<Outlet />
		</div>
	)
}

export default Layout
