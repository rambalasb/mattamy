import { SvgIcon } from '@mui/material'

export const Collapse = ({ fillColor }) => {
	return (
		<SvgIcon>
			<svg
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill={fillColor}
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M4.58259 15.4596C4.26294 15.1497 4.26067 14.6375 4.57757 14.3248L12 7L19.4224 14.3248C19.7393 14.6375 19.7371 15.1497 19.4174 15.4596C19.1076 15.76 18.6145 15.7578 18.3074 15.4547L12 9.23026L5.69261 15.4547C5.38546 15.7578 4.89241 15.76 4.58259 15.4596Z"
					fill={fillColor}
				/>
			</svg>
		</SvgIcon>
	)
}
