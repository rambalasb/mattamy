function Warningicon({ fillColor }) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			stroke={fillColor}
			width="24px"
			height="24px"
			viewBox="0 0 24 24"
		>
			<path
				strokeLinejoin="round"
				strokeWidth="2"
				d="M12,3 L22,21 L2,21 L12,3 Z M12,9 L12,15 M12,16 L12,18"
			/>
		</svg>
	)
}

export default Warningicon