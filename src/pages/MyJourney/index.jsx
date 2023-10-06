import React, { useState } from 'react'
import { Box, Typography } from '@mui/material'
import MilestoneMap from 'components/MilestoneMap'
import MattamyUniversity from 'components/MattamyUniversity'
import MilestoneDrawer from 'components/MilestoneDrawer'

const MyJourney = () => {
	const [isOpen, setIsOpen] = useState(false)

	const toggleDrawer = () => {
		setIsOpen(!isOpen)
	}

	const myJourneyTitle = 'Navigating the path of homeownership'
	const myJourneyDescription =
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.'

	return (
		<Box
			component="section"
			sx={{ mt: ['64px', '96px'], px: ['16px', '120px'] }}
		>
			<Typography color="primary.main" variant="titleLarge" component="h1">
				{myJourneyTitle}
			</Typography>
			<Typography color="primary.main" variant="bodyMedium" component="p">
				{myJourneyDescription}
			</Typography>

			<MattamyUniversity onClick={toggleDrawer} />

			<MilestoneMap />

			<MilestoneDrawer isOpen={isOpen} toggleDrawer={toggleDrawer} />
		</Box>
	)
}

export default MyJourney
