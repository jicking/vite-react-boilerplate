import { useEffect } from 'react'
import { $auth } from '../../store/auth'
import { useStore } from '@nanostores/react'
import { useNavigate } from 'react-router-dom'

export function AccountPage() {
	const auth = useStore($auth)
	const navigate = useNavigate()

	useEffect(() => {
		if (!auth?.username) {
			navigate('/account/login')
		}
	}, [auth?.username, navigate])

	return (
		<div>
			<h1>Account</h1>
			<div>
				<strong>Username:</strong> {auth?.username}
			</div>
		</div>
	)
}

export default AccountPage
