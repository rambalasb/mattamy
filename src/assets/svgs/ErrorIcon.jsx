function ErrorIcon({ height, fillColor, width }) {
	return (
		<svg
			width="24px"
			height="24px"
			viewBox="0 0 24 24"
			fill="none"
			role="img"
			xmlns="http://www.w3.org/2000/svg"
			aria-labelledby="errorIcon"
			stroke={fillColor}
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
		>
			{' '}
			<title id="errorIconTitle">Error</title> <path d="M12 8L12 13" />{' '}
			<line x1="12" y1="16" x2="12" y2="16" /> <circle cx="12" cy="12" r="10" />{' '}
		</svg>
	)
}

export default ErrorIcon
