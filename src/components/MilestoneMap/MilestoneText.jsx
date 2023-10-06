import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Box, Typography } from '@mui/material'
import { styled } from '@mui/system'
import StatusTag from 'components/common/Chip/StatusTag'
import IconLink from 'components/common/Links/IconLink'

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

const StyledOutermostBox = styled(Box)(({ theme, ...props }) => {
	const transformations = [
		{
			bottom: 110,
			left: 170,
		},
		{
			bottom: 0,
			right: 170,
		},
		{
			bottom: 110,
			right: 170,
		},
		{
			bottom: 0,
			left: 170,
		},
	]

	const mobileTransformations = [
		{
			bottom: 90,
			left: 108,
		},
		{
			bottom: 30,
			right: 108,
		},
		{
			bottom: 90,
			right: 108,
		},
		{
			bottom: 30,
			left: 108,
		},
	]

	return {
		display: 'flex',
		flexDirection: 'column',
		flexWrap: true,
		position: 'absolute',
		justifyContent: 'center',
		...mobileTransformations[props.currentindex % mobileTransformations.length],
		width: 124,
		height: 60,
		[theme.breakpoints.up('md')]: {
			...transformations[props.currentindex % transformations.length],
			width: 464,
			height: 148,
		},
	}
})

const StyledTagBox = styled(Box)(({ theme, ...props }) => ({
	display: props.currentindex === props.activemilestoneindex ? 'block' : 'none',
	...textTransformation[props.currentindex % textTransformation.length],
	[theme.breakpoints.up('md')]: {
		transition: `transform ${transformDuration}ms ${bounceEffect}, opacity 1000ms ease-in-out`,
		transform: props.hovered ? 'translate(0px, -20px)' : 'translate(0px)',
		display: 'block',
		visibility:
			props.currentindex === props.activemilestoneindex || props.hovered
				? 'visible'
				: 'hidden',
		opacity: !props.delay ? 1 : 0,
	},
}))

const StyledTitleBox = styled(Box)(({ theme, ...props }) => ({
	...textTransformation[props.currentindex % textTransformation.length],
	[theme.breakpoints.up('md')]: {
		transition: `transform ${transformDuration}ms ${bounceEffect}`,
		transform: props.hovered ? 'scale(2)' : 'scale(1)',
	},
}))

const StyledDescriptionBox = styled(Box)(({ theme, ...props }) => ({
	display: 'none',
	...textTransformation[props.currentindex % textTransformation.length],
	[theme.breakpoints.up('md')]: {
		transition: `transform ${transformDuration}ms ${bounceEffect}, max-height ${transformDuration}ms ${bounceEffect}`,
		transform: props.hovered ? 'scale(1)' : 'scale(0)',
		maxHeight: props.hovered ? '100px' : '0px',
		display: 'block',
	},
}))

const StyledButtonBox = styled(Box)(({ theme, ...props }) => ({
	display: 'none',
	[theme.breakpoints.up('md')]: {
		...textTransformation[props.currentindex % textTransformation.length],
		display: 'block',
	},
}))

const MilestoneText = ({
	title,
	description,
	hovered,
	currentIndex,
	activeMilestoneIndex,
}) => {
	const getStatusText = () =>
		currentIndex === activeMilestoneIndex
			? 'IN PROGRESS'
			: currentIndex < activeMilestoneIndex
			? 'COMPLETED'
			: 'UPCOMING'

	const [oldIndex, setOldIndex] = useState(activeMilestoneIndex)
	const [statusText, setStatusText] = useState(getStatusText())
	const [delay, setDelay] = useState(false)

	useEffect(() => {
		if (oldIndex + 1 === activeMilestoneIndex) {
			setDelay(true)
			setOldIndex(activeMilestoneIndex)
			setTimeout(() => {
				setDelay(false)
				setStatusText(getStatusText())
			}, 1500)
		}
	}, [activeMilestoneIndex])

	const linkText =
		activeMilestoneIndex < currentIndex
			? 'Preview this milestone'
			: 'LEARN MORE'
	return (
		<StyledOutermostBox currentindex={currentIndex}>
			<StyledTagBox
				mb={2}
				currentindex={currentIndex}
				activemilestoneindex={activeMilestoneIndex}
				hovered={hovered | 0}
				delay={delay | 0}
			>
				<StatusTag label={statusText} />
			</StyledTagBox>
			<StyledTitleBox currentindex={currentIndex} hovered={hovered | 0}>
				<Typography variant="titleSmall" color="primary.main" component="h2">
					{title}
				</Typography>
			</StyledTitleBox>
			<StyledDescriptionBox
				mb={1}
				currentindex={currentIndex}
				hovered={hovered | 0}
			>
				<Typography variant="bodySmall" color="primary.main">
					{description}
				</Typography>
			</StyledDescriptionBox>
			<StyledButtonBox mt={1} currentindex={currentIndex}>
				<IconLink iconType="view">{linkText}</IconLink>
			</StyledButtonBox>
		</StyledOutermostBox>
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
