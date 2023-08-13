import { useEffect, useState } from 'react'
import classes from './LoginPage.module.css'
import { $auth, login } from '../../store/auth'
import { useStore } from '@nanostores/react'
import { useNavigate } from 'react-router-dom'

export function LoginPage() {
	const auth = useStore($auth)
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const navigate = useNavigate()

	const handleSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		login(username)
		navigate('/account')
	}

	useEffect(() => {
		if (auth?.username) {
			navigate('/account')
		}
	}, [auth?.username, navigate])

	return (
		<div>
			<h1>Login</h1>
			<div>
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
			</div>
			<div></div>
		</div>
	)
}
