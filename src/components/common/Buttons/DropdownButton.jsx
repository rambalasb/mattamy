import { styled } from '@mui/system'
import PropTypes from 'prop-types'
import { Button as MuiButton } from '@mui/material'
import { ReactComponent as DropdownClosed } from 'assets/svgs/actions/dropdownClosed.svg'
import { ReactComponent as DropdownExpanded } from 'assets/svgs/actions/dropdownExpanded.svg'

const StyledButton = styled(MuiButton)(({ theme }) => {
	const textColor = theme.palette.secondary.main
	const bgColor = theme.palette.common.white
	const borderColor = theme.palette.secondary.main

	return {
		fontFamily: 'TradeGothicBoldCondensed',
		fontWeight: '700',
		fontSize: '16px',
		lineHeight: '20px',
		letterSpacing: '2.5%',

		minWidth: '172px',
		height: '56px',
		padding: '16px 12px 16px 20px',
		borderRadius: '12px',
		border: '1px solid',
		justify: 'space-between',

		color: textColor,
		backgroundColor: bgColor,
		borderColor: borderColor,
		textTransform: 'uppercase',
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
		'& path': {
			fill: 'currentColor',
		},
	}
})

const DropdownButton = ({ expanded, ...props }) => (
	<StyledButton
		disableRipple
		endIcon={expanded ? <DropdownExpanded /> : <DropdownClosed />}
		{...props}
	/>
)

DropdownButton.propTypes = {
	expanded: PropTypes.bool,
}

DropdownButton.defaultProps = {
	expanded: false,
}

export default DropdownButton
