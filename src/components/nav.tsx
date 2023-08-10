import { Link } from 'react-router-dom'
import nv from './Nav.module.css'

export function NavbarLink() {
	return (
		<nav className={nv.navbar}>
			<ul className={nv.navlinks}>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/about">About</Link>
				</li>
				<li>
					<Link to="/account/login">Login</Link>
				</li>
			</ul>
		</nav>
	)
}

export default NavbarLink
