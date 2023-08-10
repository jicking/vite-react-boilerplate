export function SiteFooter() {
	return (
		<footer className="content-wrapper">
			{import.meta.env.VITE_APP_BRAND}{' '}
			<small>
				- Mode: {import.meta.env.MODE} - {import.meta.env.VITE_APP_MODE_FILE}
			</small>
		</footer>
	)
}
