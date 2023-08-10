export function SiteFooter() {
	return (
		<footer className="content-wrapper">
			Site Footer
			<small>
				- Mode: {import.meta.env.MODE} - {import.meta.env.VITE_APP_MODE_FILE}
			</small>
		</footer>
	)
}
