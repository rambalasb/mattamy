function CheckMark({ fillColor }) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="16"
			height="11"
			viewBox="0 0 16 11"
			fill={fillColor}
		>
			<path
				d="M14 1.5L5.75 9.75L2 6"
				stroke="#035583"
				stroke-width="1.5"
				stroke-linecap="square"
				stroke-linejoin="round"
			/>
		</svg>
	)
}

export default CheckMark
