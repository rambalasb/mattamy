import React from 'react'
import PropTypes from 'prop-types'
import { Box, Typography } from '@mui/material'
import { ReactComponent as ArrowRight } from 'assets/svgs/actions/arrowRight.svg'
import StatusTag from 'components/common/Chip/StatusTag'

const transformations = [
	{
		bottom: '110px',
		left: '170px',
	},
	{
		bottom: '30px',
		right: '170px',
	},
	{
		bottom: '110px',
		right: '170px',
	},
	{
		bottom: '30px',
		left: '170px',
	},
]

const textTransformation = [
	{
		textAlign: 'left',
		transformOrigin: 'left bottom',
	},
	{
		textAlign: 'right',
		transformOrigin: 'right bottom',
	},
	{
		textAlign: 'right',
		transformOrigin: 'right bottom',
	},
	{
		textAlign: 'left',
		transformOrigin: 'left bottom',
	},
]

const transformDuration = 600

const bounceEffect = 'cubic-bezier(0.68, -0.55, 0.27, 1.55)'

const MilestoneText = ({
	title,
	description,
	hovered,
	currentIndex,
	activeMilestoneIndex,
}) => {
	const statusText =
		currentIndex === activeMilestoneIndex
			? 'IN PROGRESS'
			: currentIndex < activeMilestoneIndex
			? 'COMPLETED'
			: 'UPCOMING'

	return (
		<Box
			style={{
				...transformations[currentIndex % transformations.length],
				position: 'absolute',
				width: '464px',
				height: '148px',
			}}
		>
			<Box
				mb={2}
				visibility={
					currentIndex === activeMilestoneIndex || hovered
						? 'visible'
						: 'hidden'
				}
				style={{
					...textTransformation[currentIndex % textTransformation.length],
					transition: `transform ${transformDuration}ms ${bounceEffect}`,
					transform: hovered ? 'translate(0px, -20px)' : 'translate(0px)',
				}}
			>
				<StatusTag label={statusText} />
			</Box>
			<Box
				style={{
					...textTransformation[currentIndex % textTransformation.length],
					transition: `transform ${transformDuration}ms ${bounceEffect}`,
					transform: hovered ? 'scale(2)' : 'scale(1)',
				}}
			>
				<Typography variant="titleSmall" color="primary.main">
					{title}
				</Typography>
			</Box>
			<Box
				mb={1}
				style={{
					...textTransformation[currentIndex % textTransformation.length],
					transition: `transform ${transformDuration}ms ${bounceEffect}, max-height ${transformDuration}ms ${bounceEffect}`,
					transform: hovered ? 'scale(1)' : 'scale(0)',
					maxHeight: hovered ? '100px' : '0px',
				}}
			>
				<Typography variant="bodySmall" color="primary.main" align="right">
					{description}
				</Typography>
			</Box>
			<Box
				mt={1}
				style={{
					...textTransformation[currentIndex % textTransformation.length],
				}}
			>
				<Typography
					variant="button"
					color="secondary.main"
					paddingRight={'4px'}
				>
					{activeMilestoneIndex < currentIndex
						? 'Preview this milestone'
						: 'LEARN MORE'}
				</Typography>
				<ArrowRight />
			</Box>
		</Box>
	)
}

MilestoneText.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
	hovered: PropTypes.bool,
	currentIndex: PropTypes.number.isRequired,
	activeMilestoneIndex: PropTypes.number.isRequired,
}

MilestoneText.defaultProps = {
	title: 'Milestone Name',
	description: '',
	hovered: false,
}

export default MilestoneText
