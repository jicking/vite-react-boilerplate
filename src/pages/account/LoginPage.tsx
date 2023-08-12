import { useState } from 'react'
import classes from './LoginPage.module.css'
import { $auth, login, logout } from '../../store/auth'
import { useStore } from '@nanostores/react'

export function LoginPage() {
	const auth = useStore($auth)
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')

	const handleSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		login(username)
	}

	const handleClickLogout = () => {
		logout()
		setUsername('')
		setPassword('')
	}

	return (
		<div>
			<h1>Login</h1>
			<div>
				{auth?.username ? (
					<>
						<div>Hello {auth?.username}!</div>
						<button onClick={handleClickLogout}>Logout</button>
					</>
				) : (
					<>
						<form action="" onSubmit={handleSubmitForm}>
							<div className={classes[`field-container`]}>
								<label htmlFor="username">Username</label>
								<input type="text" id="username" required onChange={(e) => setUsername(e.target.value)} />
							</div>
							<div className={classes[`field-container`]}>
								<label htmlFor="password">Password</label>
								<input type="password" id="password" required onChange={(e) => setPassword(e.target.value)} />
							</div>
							<div className={classes[`field-container`]}>
								<button type="submit" disabled={!username || !password}>
									Login
								</button>
							</div>
						</form>
					</>
				)}
			</div>
			<div></div>
		</div>
	)
}
