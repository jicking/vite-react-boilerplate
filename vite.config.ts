/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const defaultTestExclude = [
	'**/node_modules/**',
	'**/dist/**',
	'**/cypress/**',
	'**/.{idea,git,cache,output,temp}/**',
	'**/{karma,rollup,webpack,vite,vitest,jest,ava,babel,nyc,cypress,tsup,build}.config.*',
	'**/test-e2e/**'
]

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	test: {
		globals: true,
		environment: 'jsdom',
		exclude: [...defaultTestExclude]
	}
})
