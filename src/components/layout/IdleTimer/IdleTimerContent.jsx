import React from 'react'
import PropTypes from 'prop-types'
import { styled } from '@mui/system'
import { Box, Typography } from '@mui/material'
import Button from 'components/common/Buttons/Button'
import IconButton from 'components/common/Buttons/IconButton'
import { ReactComponent as CloseIcon } from 'assets/svgs/actions/close.svg'

const StyledBox = styled(Box)(({ theme }) => ({
	backgroundColor: theme.palette.common.white,
	borderRadius: '12px',
	padding: '24px 24px 64px 24px',
	boxShadow: '0px 0px 20px 0px #0000001F',
	gap: 2,
	textAlign: 'center',
	[theme.breakpoints.up('md')]: {
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		minWidth: '720px',
	},
}))

const IdleTimerContent = ({ handleStay, handleLogout, remaining }) => {
	const idleTimerTitleText = 'Are you still there?'
	const idletimerDescriptionText =
		'Your session is about to expire soon and you will be automatically logged out.'
	const idleTimerLogoutText = 'Log out now'
	const idleTimerLogoutStayText = 'I’m still here'
	const idleTimerRemainingText = 'This session will end in '

	const minuteAndSecond = `${Math.floor(remaining / 60)} mins 
    ${remaining % 60} secs`

	return (
		<StyledBox>
			<Box display="flex" justifyContent="flex-end">
				<IconButton onClick={handleStay} aria-label={'close'} color="primary">
					<CloseIcon />
				</IconButton>
			</Box>
			<Box
				display={'flex'}
				flexDirection={'column'}
				alignItems={'center'}
				px={2}
			>
				<Box py={3}>
					<Typography variant="titleMedium" color="primary.main">
						{idleTimerTitleText}
					</Typography>
				</Box>
				<Box pb={3}>
					<Typography
						variant="bodyMedium"
						color="primary.main"
						id={'session-timeout-title'}
					>
						{idletimerDescriptionText}
					</Typography>
				</Box>
				<Box pb={6}>
					<Typography
						variant="titleSmall"
						color="primary.main"
						id={'session-timeout-description'}
					>
						{idleTimerRemainingText}
					</Typography>
					<Typography variant="titleSmall" color="secondary.main">
						{minuteAndSecond}
					</Typography>
				</Box>
				<Box display="flex" flexWrap={'wrap'} justifyContent={'center'} gap={2}>
					<Button variant={'secondary'} onClick={handleLogout}>
						{idleTimerLogoutText}
					</Button>
					<Button onClick={handleStay}>{idleTimerLogoutStayText}</Button>
				</Box>
			</Box>
		</StyledBox>
	)
}

IdleTimerContent.propTypes = {
	handleStay: PropTypes.func,
	handleLogout: PropTypes.func,
	remaining: PropTypes.number,
}

IdleTimerContent.defaultProps = {
	handleStay: () => {},
	handleLogout: () => {},
	remaining: 0,
}

export default IdleTimerContent
