export const BackIcon = (props) => {
	return (
		<svg
			width={props.width ? props.width : 9}
			height={props.height ? props.height : 16}
			viewBox="0 0 9 16"
			fill={props.fill}
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M8.45958 15.4174C8.14966 15.7371 7.63749 15.7393 7.32476 15.4224L0 8L7.32477 0.57757C7.63749 0.260672 8.14966 0.262938 8.45958 0.582591C8.75996 0.892412 8.75777 1.38545 8.45467 1.69261L2.23026 8L8.45467 14.3074C8.75777 14.6145 8.75996 15.1076 8.45958 15.4174Z"
				fill={props.fill}
			/>
		</svg>
	)
}
