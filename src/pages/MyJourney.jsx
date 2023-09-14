import React from 'react'
import { Box, Typography } from '@mui/material'
import DisplayMilestones from 'components/milestone/DisplayMilestones'

const MyJourney = () => {
	const myJourneyTitle = 'Navigating the path of homeownership'

	return (
		<Box sx={{ mt: ['64px', '96px'], px: ['16px', '120px'] }}>
			<div>
				<Typography color="primary.main" variant="titleLarge">
					{myJourneyTitle}
				</Typography>
			</div>
			<DisplayMilestones />
		</Box>
	)
}

export default MyJourney
