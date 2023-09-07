import { styled } from '@mui/system'
import { Chip as MuiChip } from '@mui/material'

const CustomChip = styled(MuiChip)(({ theme, variant, ...props }) => {
	// Varients
	let textColor, bgColor, borderColor
	switch (variant) {
		case 'unselected':
			textColor = theme.palette.primary.main
			bgColor = theme.palette.common.white
			borderColor = theme.palette.primary.main
			break
		case 'disabled':
			textColor = theme.palette.primary.grey
			bgColor = theme.palette.common.white
			borderColor = theme.palette.primary.grey
			break
		case 'selected':
		default:
			textColor = theme.palette.common.white
			bgColor = theme.palette.secondary.main
			borderColor = theme.palette.secondary.main
			break
	}

	// Styling
	return {
		fontFamily: 'TradeGothicBoldCondensed',
		fontSize: 16,
		fontWeight: 700,
		lineHeight: 20,
		letteSpacing: '0.025em',
		textAlign: 'center',
		color: textColor,
		backgroundColor: bgColor,
		border: '2px solid',
		borderColor: borderColor,
		padding: '24px 18px',
		borderRadius: 12,
		gap: 8,
		cursor: 'pointer',
		textTransform: 'uppercase',
		'&:hover': {
			color: textColor,
			backgroundColor: bgColor,
			borderColor: borderColor,
		},

		'& .MuiChip-label': {
			lineHeight: 5,
		},
	}
})

export const Chip = ({ ...props }) => {
	return <CustomChip {...props}></CustomChip>
}
