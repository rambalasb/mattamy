import React from 'react'
import PropTypes from 'prop-types'
import { Box, Typography } from '@mui/material'
import { styled } from '@mui/system'
import { ReactComponent as MilestoneIconCircleBorder } from 'assets/svgs/milestone/milestoneIconCircleBorder.svg'
import { ReactComponent as MilestoneIconCompleted } from 'assets/svgs/milestone/milestoneIconCompleted.svg'

const transformDuration = 600

const bounceEffect = 'cubic-bezier(0.68, -0.55, 0.27, 1.55)'

const StyledOutermostBox = styled(Box)(({ theme, ...props }) => ({
	width: '98px',
	height: '98px',
	[theme.breakpoints.up('md')]: {
		transition: `transform ${transformDuration}ms ${bounceEffect}`,
		transform: props.hovered ? 'scale(1.5)' : 'scale(1)',
		width: '128px',
		height: '128px',
	},
}))

const StyledInnerBox = styled(Box)(({ theme, ...props }) => ({
	position: 'absolute',
	'& path': {
		fill:
			props.activemilestoneindex < props.currentindex
				? theme.palette.primary.grey
				: '',
		transition: 'fill 1500ms',
		transitionDelay: '1000ms',
	},
	display: props.activemilestoneindex > props.currentindex ? 'none' : 'unset',
	svg: {
		width: '64px',
		height: '64px',
	},
	top: '16px',
	left: '16px',
	[theme.breakpoints.up('md')]: {
		svg: {
			width: '80px',
			height: '80px',
		},
		top: '24px',
		left: '24px',
	},
}))

const StyledOuterBox = styled(Box)(({ theme, ...props }) => ({
	stroke:
		props.activemilestoneindex !== props.currentindex
			? theme.palette.primary.grey
			: theme.palette.secondary.main,
	transition: 'stroke 1500ms',
	transitionDelay: '1000ms',
	svg: {
		width: '98px',
		height: '98px',
	},
	[theme.breakpoints.up('md')]: {
		svg: {
			width: '128px',
			height: '128px',
		},
	},
}))

const NumberContainer = styled(Box)(({ theme, ...props }) => ({
	width: '32px',
	height: '32px',
	borderRadius: '50%', // Make it a circle
	display: 'flex',
	alignItems: 'flex-end',
	justifyContent: 'center',
	backgroundColor:
		props.activemilestoneindex !== props.currentindex
			? theme.palette.primary.grey
			: theme.palette.secondary.main,
	transition: 'background-color 1500ms',
	transitionDelay: '1000ms',
	color: theme.palette.common.white,
	position: 'absolute',
	bottom: '-25px',
	left: '50%',
	transform: 'translateX(-50%)',
}))

const MilestoneBadge = ({
	milestoneIcon,
	hovered,
	currentIndex,
	activeMilestoneIndex,
}) => {
	return (
		<StyledOutermostBox hovered={hovered | 0}>
			<StyledOuterBox
				activemilestoneindex={activeMilestoneIndex}
				currentindex={currentIndex}
				aria-hidden="true"
				role="presentation"
			>
				<MilestoneIconCircleBorder />
			</StyledOuterBox>
			{activeMilestoneIndex <= currentIndex && (
				<StyledInnerBox
					activemilestoneindex={activeMilestoneIndex}
					currentindex={currentIndex}
					aria-hidden="true"
					role="presentation"
				>
					{milestoneIcon}
					<NumberContainer
						activemilestoneindex={activeMilestoneIndex}
						currentindex={currentIndex}
					>
						<Typography variant="titleXSmall">{currentIndex}</Typography>
					</NumberContainer>
				</StyledInnerBox>
			)}
			<MilestoneIconCompleted
				style={{
					top: '0px',
					width: 'inherit',
					height: 'min-content',
					position: 'absolute',
					opacity: activeMilestoneIndex > currentIndex ? 1 : 0,
					transition: 'opacity 1500ms',
				}}
			/>
		</StyledOutermostBox>
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
