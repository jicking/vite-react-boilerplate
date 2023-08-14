import { Link } from 'react-router-dom'
import classes from './SiteHeader.module.css'
import { $auth, logout } from '../store/auth'
import { useStore } from '@nanostores/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
export function SiteHeader() {
	const auth = useStore($auth)

	const handleClickLogout = () => {
		logout()
	}

	return (
		<header className={`content-wrapper ${classes.siteHeader}`}>
			<div className={classes.navTitle}> {import.meta.env.VITE_APP_BRAND} </div>
			<nav className={`${classes.mainNav}`}>
				<span className={classes.brgrMenu}>
					<a href="/">
						<h2>
							<FontAwesomeIcon icon={faBars} />
						</h2>
					</a>
				</span>
				<ul className={classes.navlinks}>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/about">About</Link>
					</li>
					{auth?.username ? (
						<>
							<li>
								<Link to="/account">Account</Link>
							</li>
							<li>
								<a href="/" onClick={handleClickLogout}>
									Logout
								</a>
							</li>
						</>
					) : (
						<li>
							<Link to="/account/login">Login</Link>
						</li>
					)}
				</ul>
			</nav>
		</header>
	)
}

export default SiteHeader
