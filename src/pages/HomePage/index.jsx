import React from 'react'
import { Box, Typography } from '@mui/material'
import HomeOverviewGrid from 'components/HomeOverviewGrid'
import { useLookupContext } from 'contexts/LookupContext'

const HomePage = () => {
	const { firstName } = useLookupContext()

	const titleText = 'Hi, '

	return (
		<>
			<Box
				sx={{
					mt: ['64px', '96px'],
					px: ['16px', '120px'],
				}}
			>
				<div>
					<Typography color="primary.main" variant="titleLarge">
						{titleText}
						{firstName}.
					</Typography>
				</div>
				<div>
					<Typography color="primary.main" variant="bodyMedium">
						Nullam diam id vitae quam mattis lectus. Risus dictum pharetra et
						mauris velit mauris enim odio feugiat. Suspendisse suspendisse at
						gravida id. Nulla nunc orci eros odio. Sed purus massa.
					</Typography>
				</div>

				<HomeOverviewGrid />
			</Box>
		</>
	)
}

export default HomePage
