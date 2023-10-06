import React, { useEffect, useState } from 'react'
import { Drawer, Modal, useMediaQuery } from '@mui/material'
import { useMsal } from '@azure/msal-react'
import { useIdleTimer } from 'react-idle-timer'
import IdleTimerContent from './IdleTimerContent'

const SessionTimeoutWarning = () => {
	const timeoutSecond = 5 * 60

	// eslint-disable-next-line no-unused-vars
	const [state, setState] = useState('Active')
	const [count, setCount] = useState(0)
	const [remaining, setRemaining] = useState(timeoutSecond)

	const { instance } = useMsal()
	const [showWarning, setShowWarning] = useState(false)
	const isMobile = useMediaQuery((theme) => theme.breakpoints.down('md'))

	const onIdle = () => {
		setState('Idle')
		handleLogout()
	}

	const onActive = () => {
		setState('Active')
	}

	const onAction = () => {
		setCount(count + 1)
	}

	const onPrompt = () => {
		setState('Prompted')
		setShowWarning(true)
	}

	const { getRemainingTime, reset: resetIdleTimer } = useIdleTimer({
		onIdle,
		onActive,
		onAction,
		onPrompt,
		timeout: timeoutSecond * 1000,
		promptBeforeIdle: timeoutSecond * 0.6 * 1000,
		throttle: 500,
	})

	useEffect(() => {
		const interval = setInterval(() => {
			setRemaining(Math.ceil(getRemainingTime() / 1000))
		}, 500)

		return () => {
			clearInterval(interval)
		}
	}, [])

	const handleStay = () => {
		setShowWarning(false)
		resetIdleTimer() // Reset the timer
	}

	const handleLogout = () => {
		sessionStorage.clear()
		instance.logoutRedirect()
	}

	const content = (
		<div>
			<IdleTimerContent
				handleStay={handleStay}
				handleLogout={handleLogout}
				remaining={remaining}
			/>
		</div>
	)

	return (
		<>
			{/* <p>Current State: {state}</p>
			<p>Remaining Seconds: {remaining}</p>
			<p>Action Events: {count}</p> */}
			{isMobile ? (
				<Drawer
					anchor="bottom"
					open={showWarning}
					onClose={handleStay}
					aria-labelledby="session-timeout-title"
					aria-describedby="session-timeout-description"
				>
					{content}
				</Drawer>
			) : (
				<Modal
					open={showWarning}
					onClose={handleStay}
					aria-labelledby="session-timeout-title"
					aria-describedby="session-timeout-description"
				>
					{content}
				</Modal>
			)}
		</>
	)
}

export default SessionTimeoutWarning
