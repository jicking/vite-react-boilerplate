import { action } from 'nanostores'
import { persistentAtom } from '@nanostores/persistent'

export interface Auth {
	username?: string
}

export const $auth = persistentAtom<Auth>(
	'auth',
	{},
	{
		encode: JSON.stringify,
		decode: JSON.parse
	}
)

export const login = action($auth, 'login', (store, username: string) => {
	const auth: Auth = {
		username
	}
	store.set(auth)
	return store.get()
})

export const logout = action($auth, 'logout', (store) => {
	const auth: Auth = {}
	store.set(auth)
	return store.get()
})

// $auth.login('username')
// $auth.logout()
