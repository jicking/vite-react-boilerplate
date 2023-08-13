import { HomePage } from './pages/HomePage'
import classes from './App.module.css'
import { SiteHeader } from './components/SiteHeader'
import { SiteFooter } from './components/SiteFooter'
import { AboutPage } from './pages/AboutPage'
import { NotFoundPage } from './pages/NotFoundPage'
import { Outlet, Route, Routes } from 'react-router-dom'
import { LoginPage } from './pages/account/LoginPage'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faBars } from '@fortawesome/free-solid-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import AccountPage from './pages/account/AccountPage'

function App() {
	// @todo implement auth required routes https://stackblitz.com/github/remix-run/react-router/tree/main/examples/auth?file=src%2FApp.tsx
	const MainPageLayout = () => (
		<div className={classes.site}>
			<SiteHeader />
			<main className={`content-wrapper ${classes[`site-content`]}`}>
				<FontAwesomeIcon icon={faEnvelope} /> <br></br>
				<FontAwesomeIcon icon={faBars} />
				<FontAwesomeIcon icon={faFacebook} />
				<Outlet />
			</main>
			<SiteFooter />
		</div>
	)

	return (
		<Routes>
			<Route path="/" element={<MainPageLayout />}>
				<Route index element={<HomePage />} />
				<Route path="about" element={<AboutPage />} />
				<Route path="*" element={<NotFoundPage />} />
			</Route>
			<Route path="/account" element={<MainPageLayout />}>
				<Route index element={<AccountPage />} />
				<Route path="login" element={<LoginPage />} />
				<Route path="*" element={<NotFoundPage />} />
			</Route>
		</Routes>
	)
}

export default App
