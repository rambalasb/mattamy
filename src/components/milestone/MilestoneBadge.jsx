import React from 'react'
import PropTypes from 'prop-types'
import { Box } from '@mui/material'
import { styled } from '@mui/system'
import { ReactComponent as MilestoneIconCircleBorder } from 'assets/svgs/milestoneIconCircleBorder.svg'
import { ReactComponent as MilestoneIconCompleted } from 'assets/svgs/milestoneIconCompleted.svg'

const StyledBox = styled(Box)(({ theme, ...props }) => ({
	top: '24px',
	left: '24px',
	position: 'absolute',
	svg: {
		width: '80px',
		height: '80px',
	},
	'& path': {
		fill:
			props.activeMilestoneIndex < props.currentIndex
				? theme.palette.primary.grey
				: '',
	},
	display: props.activeMilestoneIndex > props.currentIndex ? 'none' : 'unset',
}))

const transformDuration = 600

const bounceEffect = 'cubic-bezier(0.68, -0.55, 0.27, 1.55)'

const MilestoneBadge = ({
	milestoneIcon,
	hovered,
	currentIndex,
	activeMilestoneIndex,
}) => {
	return (
		<Box
			style={{
				transition: `transform ${transformDuration}ms ${bounceEffect}`,
				transform: hovered ? 'scale(1.5)' : 'scale(1)',
			}}
		>
			<MilestoneIconCircleBorder
				style={{
					stroke: activeMilestoneIndex !== currentIndex ? '#97999B' : '#0063C6',
				}}
			/>
			{activeMilestoneIndex <= currentIndex && (
				<StyledBox
					activeMilestoneIndex={activeMilestoneIndex}
					currentIndex={currentIndex}
				>
					{milestoneIcon}
				</StyledBox>
			)}
			{activeMilestoneIndex > currentIndex && (
				<MilestoneIconCompleted
					style={{
						right: '0px',
						position: 'absolute',
					}}
				/>
			)}
		</Box>
	)
}

MilestoneBadge.propTypes = {
	milestoneIcon: PropTypes.element.isRequired,
	hovered: PropTypes.bool,
	currentIndex: PropTypes.number.isRequired,
	activeMilestoneIndex: PropTypes.number.isRequired,
}

MilestoneBadge.defaultProps = {
	hovered: false,
}

export default MilestoneBadge
