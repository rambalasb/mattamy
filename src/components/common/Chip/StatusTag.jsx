import React from 'react'
import PropTypes from 'prop-types'
import { styled } from '@mui/system'
import { Chip as MuiChip } from '@mui/material'

const CustomChip = styled(MuiChip)(({ theme, variant, ...props }) => {
	// Varients
	let bgColor
	switch (variant) {
		case 'IN PROGRESS':
			bgColor = theme.palette.secondary.main
			break
		case 'COMPLETED':
			bgColor = theme.palette.functional.success
			break
		case 'UPCOMING':
		default:
			bgColor = theme.palette.primary.grey
			break
	}

	// Styling
	return {
		width: '110px',
		height: '32px',
		padding: '8px 16px 8px 16px',
		borderRadius: '16px',
		gap: '10px',
		backgroundColor: bgColor,
		fontFamily: 'Graphie',
		fontSize: '12px',
		fontWeight: 600,
		lineHeight: '16px',
		letterSpacing: '0em',
		textAlign: 'left',
		color: theme.palette.common.white,
		textTransform: 'uppercase',
		overflow: 'unset',
	}
})

const StatusTag = ({ label }) => {
	return <CustomChip label={label} variant={label}></CustomChip>
}

StatusTag.propTypes = {
	label: PropTypes.oneOf(['IN PROGRESS', 'COMPLETED', 'UPCOMING']),
}

StatusTag.defaultProps = {
	label: 'UPCOMING',
}

export default StatusTag
