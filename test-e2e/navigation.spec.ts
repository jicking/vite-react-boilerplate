import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
	await page.goto('/')
})

test('Page has default title', async ({ page }) => {
	// Expect a title "to contain" a substring.
	await expect(page).toHaveTitle(/BRAND/)
})

test('Home link', async ({ page }) => {
	// Click the get started link.
	await page.getByRole('link', { name: 'Home' }).click()

	// Expects page to have a heading with the name of Installation.
	await expect(page.getByRole('heading', { name: 'Home Page' })).toBeVisible()
})

test('About link', async ({ page }) => {
	await page.getByRole('link', { name: 'About' }).click()
	await expect(page.getByRole('heading', { name: 'About' })).toBeVisible()
})

test('Login link', async ({ page }) => {
	await page.getByRole('link', { name: 'Login' }).click()
	await expect(page.getByRole('heading', { name: 'Login' })).toBeVisible()
})
