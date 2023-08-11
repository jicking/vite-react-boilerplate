import { HomePage } from './pages/HomePage'
import classes from './App.module.css'
import { NavbarLink } from './components/nav'
import { SiteFooter } from './components/SiteFooter'
import { AboutPage } from './pages/AboutPage'
import { NotFoundPage } from './pages/NotFoundPage'
import { Outlet, Route, Routes } from 'react-router-dom'
import { LoginPage } from './pages/account/LoginPage'
import { IoBoatSharp, IoAccessibility } from 'react-icons/io5'

function App() {
	// @todo implement auth required routes https://stackblitz.com/github/remix-run/react-router/tree/main/examples/auth?file=src%2FApp.tsx
	// @todo extract site header to component
	const MainPageLayout = () => (
		<div className={classes.site}>
			<header className={`content-wrapper ${classes.siteHeader} testing something testing`}>
				<h1 className={classes.navTitle}> {import.meta.env.VITE_APP_BRAND} </h1>
				<NavbarLink />
			</header>
			<main className={`content-wrapper ${classes.siteContent}`}>
				<IoBoatSharp />
				<IoAccessibility />
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
				<Route index element={<HomePage />} />
				<Route path="login" element={<LoginPage />} />
				<Route path="*" element={<NotFoundPage />} />
			</Route>
		</Routes>
	)
}

export default App
