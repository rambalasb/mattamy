import React from 'react'
import PropTypes from 'prop-types'
import { Button as MuiButton, Typography } from '@mui/material'
import { styled } from '@mui/system'
import { ReactComponent as ArrowRight } from 'assets/svgs/actions/arrowRight.svg'

const StyledButton = styled(MuiButton)(({ theme, variant }) => {
	let textColor, hoverTextColor

	switch (variant) {
		case 'primary-dark':
			textColor = theme.palette.common.white
			hoverTextColor = theme.palette.common.white
			break
		case 'primary':
		default:
			textColor = theme.palette.secondary.main
			hoverTextColor = theme.palette.primary.main
			break
	}

	return {
		color: textColor,
		textTransform: 'uppercase',
		borderRadius: '4px',
		border: '2px solid transparent',
		'& span': {
			paddingTop: 4,
			lineHeight: '15px',
			borderBottom: '1px solid transparent',
		},
		'& path': {
			fill: textColor,
		},

		boxShadow: 'none', // removes the box-shadow MUI applies by default

		'&:hover': {
			color: hoverTextColor,
			'& span': {
				borderColor: hoverTextColor,
				borderBottom: '1px solid',
			},
			'& path': {
				fill: hoverTextColor,
			},
			boxShadow: 'none',
			backgroundColor: 'rgb(0, 0, 0, 0)',
		},
		'&:focus': {
			outline: 'none', // removes the outline MUI applies by default
			border: '2px solid currentColor',
			'& span': {
				borderBottom: '1px solid transparent',
			},
		},
		gap: '8px',
		padding: '4px 3px 4px 4px',
	}
})

const IconLink = ({ children, iconType, ...props }) => (
	<StyledButton disableRipple variant={'primary'} {...props}>
		<Typography variant="button" component={'span'}>
			{children}
		</Typography>
		{iconType === 'view' && <ArrowRight />}
	</StyledButton>
)

IconLink.propTypes = {
	children: PropTypes.string.isRequired,
	iconType: PropTypes.oneOf(['download', 'view', null]),
}

IconLink.defaultProps = {
	iconType: null,
}

export default IconLink
