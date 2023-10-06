import React from 'react'
import { IconButton as MuiIconButton } from '@mui/material'
import { styled } from '@mui/system'

const StyledIconButton = styled(MuiIconButton)(() => {
	return {
		'&:hover': {
			transform: 'scale(1.1)',
		},
		'& path': {
			fill: 'currentColor',
		},
	}
})

const IconButton = ({ ...props }) => (
	<StyledIconButton disableRipple {...props} />
)

export default IconButton
