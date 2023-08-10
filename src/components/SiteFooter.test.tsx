import { describe, expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import { SiteFooter } from './SiteFooter'

describe('SiteFooter test', () => {
	test('Should show BRAND', () => {
		render(<SiteFooter />)

		expect(screen.getByText(/BRAND/i)).toBeDefined()
	})
})
