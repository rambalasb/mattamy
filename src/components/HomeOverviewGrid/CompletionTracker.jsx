import React from 'react'
import PropTypes from 'prop-types'
import {
	Box,
	Card as MuiCard,
	CircularProgress,
	Typography,
} from '@mui/material'
import { styled } from '@mui/system'
import Button from 'components/common/Buttons/Button'

const StyledCard = styled(MuiCard)(({ theme }) => ({
	borderRadius: '12px',
	boxShadow: '0px 0px 20px 0px #0000001F',
	'.MuiCircularProgress-colorPrimary': {
		color: theme.palette.primary.lightBlue,
	},

	paddingBlock: 48,
	paddingInline: 24,
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	gap: 48,
	[theme.breakpoints.up('md')]: {
		paddingInline: 48,
		flexDirection: 'row',
	},
}))

const HomeProgress = ({ progress }) => {
	const tagText = '1 of 9 Milestones Completed'
	const titleText = 'Congrats on the purchase of your new home!'
	const bodyText = 'In Progress: Design Your Dream Home'
	const buttonText = 'See in progress Milestone'

	return (
		<StyledCard>
			{/* Progress Circle */}
			<Box position="relative" height={248}>
				{/* Trail Circle */}
				<CircularProgress
					variant="determinate"
					value={100}
					size={248}
					color="primary"
				/>
				{/* Actual Progress Circle */}
				<Box position="absolute" top="0" left="0">
					<CircularProgress
						variant="determinate"
						value={progress}
						size={248}
						color="secondary"
					/>
				</Box>
				{/* Actual Progress Number */}
				<Box position="absolute" width={248} top={89} textAlign="center">
					<Typography
						variant="titleXLarge"
						color={'primary.main'}
						fontSize={'98px'}
						lineHeight={'114px'}
					>
						{progress}
					</Typography>
					<Typography variant="titleXLarge" color={'primary.main'}>
						%
					</Typography>
				</Box>
				<Box position="absolute" width={248} top={171} textAlign="center">
					<Typography variant="labelTag" color={'primary.main'}>
						COMPLETE
					</Typography>
				</Box>
			</Box>

			{/* Typography and Button */}
			<Box display="flex" flexDirection="column">
				<Typography variant="bodySmall" color={'secondary.main'}>
					{tagText}
				</Typography>
				<Typography
					variant="titleMedium"
					color={'primary.main'}
					fontSize={'26px'}
					lineHeight={'39px'}
				>
					{titleText}
				</Typography>
				<Typography variant="bodySmall" color={'primary.main'} py={2}>
					{bodyText}
				</Typography>
				<Button width="fit-content">{buttonText}</Button>
			</Box>
		</StyledCard>
	)
}

HomeProgress.propTypes = {
	progress: PropTypes.number.isRequired,
}

export default HomeProgress
