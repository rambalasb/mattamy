import React, { useEffect, useState } from 'react'
import { Box, useMediaQuery } from '@mui/material'
import MilestoneBadge from 'components/MilestoneMap/MilestoneBadge'
import MilestoneText from 'components/MilestoneMap/MilestoneText'

import { ReactComponent as MilestonePath } from 'assets/svgs/milestone/milestonePath.svg'
import { ReactComponent as MilestonePathMobile } from 'assets/svgs/milestone/milestonePathMobile.svg'

import { ReactComponent as MilestoneIconConstruction } from 'assets/svgs/iconography/construction.svg'
import { ReactComponent as MilestoneIconKitchenCabinets } from 'assets/svgs/iconography/kitchenCabinets.svg'
import { ReactComponent as MilestoneIconRoof } from 'assets/svgs/iconography/roof.svg'
import { ReactComponent as MilestoneIconFrameWalk } from 'assets/svgs/iconography/frameWalk.svg'

import BirthdayAnimation from 'assets/images/Birthday.gif'

// TODO: replace this with actual milestone data
const milestones = [
	{
		icon: <></>,
		title: 'Welcome To Your New Home',
		description:
			'The home building process you are about to embark upon will be an exciting one but can bring its fair share of inquiries. ',
	},
	{
		icon: <MilestoneIconKitchenCabinets />,
		title: 'Design Your Dream Home',
		description:
			'Picking all the design details to make your dream home a reality. In this step, there are 3 key items that will take place: Architectural Choice Options, Introduction to Design Studio, Features and Finishes Selection.',
	},
	{
		icon: <MilestoneIconConstruction />,
		title: 'Construction Has Started',
		description:
			'Get ready for the start of construction! In this milestone, the construction team will be reaching out to you to schedule your Pre-Construction meeting.',
	},
	{
		icon: <MilestoneIconFrameWalk />,
		title: 'Taking Shape',
		description:
			'Once the foundation has been laid, we will begin to start framing as your house will be gradually taking shape. In this milestone, your future floors and walls will be getting installed.',
	},
	{
		icon: <MilestoneIconRoof />,
		title: 'Your Roof Is On',
		description:
			'This is your half-way point! Once we have completed framing, we will be installing your roof and you will be able to see the exterior of your house taking shape.',
	},
]

const DisplayMilestones = () => {
	const [hovered, setHovered] = useState()
	const [activeMilestoneIndex, setActiveMilestoneIndex] = useState(1)
	const [isCelebrating, setIsCelebrating] = useState(true)

	useEffect(() => {
		if (isCelebrating) {
			setTimeout(() => {
				setIsCelebrating(false)
				setActiveMilestoneIndex(2)
			}, 3000)
		}
	}, [])

	const isDesktopView = useMediaQuery((theme) => theme.breakpoints.up('md'))

	const alignments = [
		{ justifyContent: 'center' },
		{ justifyContent: 'flex-end' },
		{ justifyContent: 'center' },
		{ justifyContent: 'flex-start' },
	]

	const milestoneCircleWidth = isDesktopView ? 128 : 98
	const milestonePathStrokeWidth = isDesktopView ? 48 : 32

	const pathTransformations = [
		{
			transform: 'scale(-1, -1)',
			bottom: (milestoneCircleWidth - milestonePathStrokeWidth) / 2,
			right: milestoneCircleWidth / 2,
		},
		{
			transform: 'scale(1, 1)',
			bottom: milestoneCircleWidth / 2,
			right: (milestoneCircleWidth - milestonePathStrokeWidth) / 2,
		},
		{
			transform: 'scale(1, -1)',
			bottom: (milestoneCircleWidth - milestonePathStrokeWidth) / 2,
			left: milestoneCircleWidth / 2,
		},
		{
			transform: 'scale(-1, 1)',
			bottom: milestoneCircleWidth / 2,
			left: (milestoneCircleWidth - milestonePathStrokeWidth) / 2,
		},
	]

	return (
		<Box
			display="flex"
			flexDirection="column"
			my={isDesktopView ? 25 : 8}
			justifyContent="center"
			alignItems="center"
		>
			{milestones.map((milestone, index) => (
				<Box
					key={index}
					display="flex"
					justifyContent={alignments[index % alignments.length].justifyContent}
					width={isDesktopView ? 876 : 352} // (398-24+64)*2 (143-16)*2+98 Adjust as necessary
					mb={isDesktopView ? 20 : 8}
					onMouseEnter={() => setHovered(index)}
					onMouseLeave={() => setHovered(null)}
				>
					<div style={{ position: 'relative' }}>
						{/* Milestone Icon */}
						<MilestoneBadge
							milestoneIcon={milestone.icon}
							hovered={hovered === index}
							activeMilestoneIndex={activeMilestoneIndex}
							currentIndex={index}
						/>
						{/* Celerating */}
						{isCelebrating && activeMilestoneIndex === index && (
							<img
								src={BirthdayAnimation}
								style={{
									width: '452px',
									height: '326px',
									top: '-100px', // 326/2-64
									left: '-162px', // 452/2-64
									position: 'absolute',
									angle: '-180 deg',
								}}
							/>
						)}
						{/* Text */}
						<MilestoneText
							title={milestone.title}
							description={milestone.description}
							hovered={hovered === index}
							activeMilestoneIndex={activeMilestoneIndex}
							currentIndex={index}
						/>
						{/* Path */}
						{index !== 0 && isDesktopView && (
							<MilestonePath
								style={{
									...pathTransformations[index % pathTransformations.length],
									stroke: activeMilestoneIndex < index ? '#97999B' : '#002D72',
									zIndex: -1,
									position: 'absolute',
									transition: 'stroke 1500ms',
									transitionDelay: '500ms',
								}}
								aria-hidden="true"
								role="presentation"
							/>
						)}
						{index !== 0 && !isDesktopView && (
							<MilestonePathMobile
								style={{
									...pathTransformations[index % pathTransformations.length],
									stroke: activeMilestoneIndex < index ? '#97999B' : '#002D72',
									zIndex: -1,
									position: 'absolute',
									transition: 'stroke 1500ms',
									transitionDelay: '500ms',
								}}
								aria-hidden="true"
								role="presentation"
							/>
						)}
					</div>
				</Box>
			))}
		</Box>
	)
}

export default DisplayMilestones
