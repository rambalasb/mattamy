import React from 'react'
import { Button as MuiButton } from '@mui/material'
import { styled } from '@mui/system'

const StyledButton = styled(MuiButton)(({ theme, variant, ...props }) => {
	let textColor, bgColor, borderColor

	switch (variant) {
		case 'primary-dark':
			textColor = theme.palette.common.white
			bgColor = theme.palette.secondary.main
			borderColor = theme.palette.common.white
			break
		case 'secondary':
			textColor = theme.palette.primary.main
			bgColor = theme.palette.common.white
			borderColor = theme.palette.primary.main
			break
		case 'secondary-dark':
			textColor = theme.palette.common.white
			bgColor = theme.palette.secondary.main
			borderColor = theme.palette.common.white
			break
		case 'primary':
		default:
			textColor = theme.palette.common.white
			bgColor = theme.palette.primary.main
			borderColor = theme.palette.primary.main
			break
	}

	return {
		fontFamily: 'TradeGothicBoldCondensed',
		fontWeight: 'bold',
		fontSize: '16px',
		lineHeight: '20px',
		letterSpacing: '2.5%',

		color: textColor,
		backgroundColor: bgColor,
		borderColor: borderColor,
		border: '1px solid',
		textTransform: 'uppercase', // Make the text all uppercase
		boxShadow: 'none', // removes the box-shadow MUI applies by default
		'&:focus': {
			outline: 'none', // removes the outline MUI applies by default
		},
		'&:hover': {
			color: bgColor,
			backgroundColor: textColor,
			borderColor: borderColor,
			border: '1px solid',
			boxShadow: 'none',
		},
		borderRadius: '12px',
		gap: '8px',
		padding: '18px 56px',
		textWrap: 'nowrap',
		...props,
	}
})

const Button = ({ ...props }) => (
	<StyledButton disableRipple variant={'primary'} {...props} />
)

export default Button
