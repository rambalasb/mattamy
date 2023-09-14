import React, { useState } from 'react'
import { Box } from '@mui/material'
import MilestoneBadge from 'components/milestone/MilestoneBadge'
import MilestoneText from 'components/milestone/MilestoneText'

import { ReactComponent as MilestonePath } from 'assets/svgs/milestonePath.svg'
import { ReactComponent as MilestoneIconConstruction } from 'assets/svgs/milestoneIconConstruction.svg'
import { ReactComponent as MilestoneIconKitchenCabinets } from 'assets/svgs/milestoneIconKitchenCabinets.svg'
import { ReactComponent as MilestoneIconRoof } from 'assets/svgs/milestoneIconRoof.svg'
import { ReactComponent as MilestoneIconFrameWalk } from 'assets/svgs/milestoneIconFrameWalk.svg'

// TODO: replace this with actual milestone data
const milestones = [
	{
		icon: null,
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

	const alignments = [
		{ justifyContent: 'center' },
		{ justifyContent: 'flex-end' },
		{ justifyContent: 'center' },
		{ justifyContent: 'flex-start' },
	]

	const pathTransformations = [
		{
			transform: 'scale(-1, -1)',
			bottom: '40',
			right: '64',
		},
		{
			transform: 'scale(1, 1)',
			bottom: '64',
			right: '40', // 64-24
		},
		{
			transform: 'scale(1, -1)',
			bottom: '40',
			left: '64',
		},
		{
			transform: 'scale(-1, 1)',
			bottom: '64',
			left: '40',
		},
	]

	return (
		<Box
			display="flex"
			flexDirection="column"
			my={20}
			justifyContent="center"
			alignItems="center"
		>
			{milestones.map((milestone, index) => (
				<Box
					key={index}
					display="flex"
					justifyContent={alignments[index % alignments.length].justifyContent}
					width={876} // (398-24+64)*2 Adjust as necessary
					mb={20}
					onMouseEnter={() => setHovered(index)}
					onMouseLeave={() => setHovered(null)}
				>
					<div
						style={{ position: 'relative', width: '128px', height: '128px' }}
					>
						{/* Milestone Icon */}
						<MilestoneBadge
							milestoneIcon={milestone.icon}
							hovered={hovered === index}
							activeMilestoneIndex={activeMilestoneIndex}
							currentIndex={index}
						/>
						{/* Text */}
						<MilestoneText
							title={milestone.title}
							description={milestone.description}
							hovered={hovered === index}
							activeMilestoneIndex={activeMilestoneIndex}
							currentIndex={index}
						/>
						{/* Path */}
						{index !== 0 && (
							<MilestonePath
								style={{
									...pathTransformations[index % pathTransformations.length],
									stroke: activeMilestoneIndex < index ? '#97999B' : '#002D72',
									zIndex: -1,
									position: 'absolute',
								}}
							/>
						)}
					</div>
				</Box>
			))}
		</Box>
	)
}

export default DisplayMilestones
