import React from 'react'
import PropTypes from 'prop-types'
import { Alert as MuiAlert, Typography } from '@mui/material'
import { styled } from '@mui/system'
import IconButton from '../Buttons/IconButton'

import { ReactComponent as CloseIcon } from 'assets/svgs/actions/close.svg'
import { ReactComponent as ErrorIcon } from 'assets/svgs/actions/incomplete.svg'
import { ReactComponent as InfoIcon } from 'assets/svgs/actions/warning.svg'
import { ReactComponent as SuccessIcon } from 'assets/svgs/actions/completed.svg'

const icons = {
	error: <ErrorIcon />,
	info: <InfoIcon />,
	success: <SuccessIcon />,
}

const CustomAlert = styled(MuiAlert)(({ theme }) => ({
	'&.MuiAlert-standard': {
		display: 'flex',
		alignItems: 'center',
		maxWidth: '1440px',
		width: '100%',
		borderRadius: '8px',
		border: '3px solid',
	},
	'&.MuiAlert-standardSuccess': {
		backgroundColor: theme.palette.functional.success0_05,
		borderColor: theme.palette.functional.success,
	},
	'&.MuiAlert-standardInfo': {
		backgroundColor: theme.palette.primary.lightBlue,
		borderColor: theme.palette.secondary.main,
	},
	'&.MuiAlert-standardError': {
		backgroundColor: theme.palette.functional.urgency0_05,
		borderColor: theme.palette.functional.urgency,
	},
}))

const Alert = ({ type, title, message, onClose }) => (
	<CustomAlert
		severity={type}
		iconMapping={icons}
		action={
			<IconButton aria-label="close" color="inherit" onClick={onClose}>
				<CloseIcon />
			</IconButton>
		}
	>
		<Typography variant="bodySmall">
			<strong>{title}</strong>
			{message}
		</Typography>
	</CustomAlert>
)

Alert.propTypes = {
	type: PropTypes.oneOf(['error', 'info', 'success']).isRequired,
	title: PropTypes.string.isRequired,
	message: PropTypes.string.isRequired,
	onClose: PropTypes.func,
}

export default Alert
