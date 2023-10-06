import React from 'react'
import { Button as MuiButton } from '@mui/material'
import { styled } from '@mui/system'

const StyledButton = styled(MuiButton)(({ theme }) => {
	return {
		fontFamily: 'TradeGothicBoldCondensed',
		fontWeight: 'bold',
		fontSize: '17px',
		// lineHeight: '26px',
		letterSpacing: '2.5%',

		color: theme.palette.primary.main,
		borderBottom: '2px solid transparent',
		textTransform: 'uppercase', // Make the text all uppercase
		boxShadow: 'none', // removes the box-shadow MUI applies by default
		'&:focus': {
			outline: 'none', // removes the outline MUI applies by default
		},
		'&:hover': {
			borderBottom: '2px solid',
			boxShadow: 'none',
			backgroundColor: theme.palette.common.white,
		},
		borderRadius: '0px',
		gap: '8px',
		padding: '0px 0px',
		margin: '20px 20px',
	}
})

const NavButton = ({ ...props }) => (
	<StyledButton disableRipple variant={'text'} {...props} />
)

export default NavButton
