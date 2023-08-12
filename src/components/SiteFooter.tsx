export function SiteFooter() {
	return (
		<footer className="content-wrapper">
			{`${import.meta.env.VITE_APP_BRAND} - `}
			<small>{import.meta.env.MODE}</small>
		</footer>
	)
}
