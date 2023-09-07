function DownloadIcon({ height, fillColor, width }) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="18"
			height="18"
			viewBox="0 0 18 18"
			fill={fillColor}
		>
			<g clipPath="url(#clip0)">
				<path d="M17.25 13.5168L17.25 6.75L15.0253 6.75L15.0253 13.5168C15.0253 13.9534 14.6545 14.3172 14.2095 14.3172L3.79045 14.3172C3.34551 14.3172 2.97472 13.9534 2.97472 13.5168L2.97472 6.75L0.75 6.75L0.75 13.5168C0.75 15.1903 2.08483 16.5 3.79045 16.5L14.2095 16.5C15.9152 16.5 17.25 15.1903 17.25 13.5168Z" />
				<path d="M5.53267 5.25C5.75758 5.25 5.9825 5.37 6.15118 5.55L9.1875 9.03L12.2238 5.55C12.5612 5.19 13.0672 5.19 13.4046 5.49C13.742 5.85 13.7982 6.39 13.4608 6.75L9.80601 10.95C9.63732 11.13 9.41241 11.25 9.1875 11.25C8.96259 11.25 8.73767 11.13 8.56899 10.95L4.91416 6.75C4.57679 6.39 4.63302 5.79 4.97039 5.49C5.13908 5.37 5.36399 5.25 5.53267 5.25Z" />
				<path
					d="M9.1875 9.75L9.1875 1.5"
					stroke={fillColor}
					strokeWidth="2.25"
					strokeMiterlimit="10"
				/>
			</g>
			<defs>
				<clipPath id="clip0">
					<rect width="18" height="18" transform="translate(18) rotate(90)" />
				</clipPath>
			</defs>
		</svg>
	)
}

export default DownloadIcon
