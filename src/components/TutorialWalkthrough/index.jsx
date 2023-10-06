import React, { useState } from 'react'
import { useLookupContext } from 'contexts/LookupContext'

import { styled } from '@mui/system'
import { Modal, Box, Typography, useMediaQuery } from '@mui/material'
import IconButton from 'components/common/Buttons/IconButton'
import Button from 'components/common/Buttons/Button'
import { ReactComponent as CloseIcon } from 'assets/svgs/actions/close.svg'
import TutorialWelcome from 'assets/images/TutorialWelcome.jpeg'
import TutorialHome from 'assets/images/TutorialHome.jpeg'
import TutorialJourney from 'assets/images/TutorialJourney.jpeg'
import TutorialDocuments from 'assets/images/TutorialDocuments.jpeg'
import TutorialMobileWelcome from 'assets/images/TutorialMobileWelcome.jpeg'
import TutorialMobileHome from 'assets/images/TutorialMobileHome.jpeg'
import TutorialMobileJourney from 'assets/images/TutorialMobileJourney.jpeg'
import TutorialMobileDocuments from 'assets/images/TutorialMobileDocuments.jpeg'

const StyledModal = styled(Modal)({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
})

const StyledBox = styled(Box)(({ theme }) => ({
	position: 'relative',
	backgroundColor: 'white',
	textAlign: 'center',
	overflowY: 'auto',
	overflowX: 'hidden',

	width: '100%',
	height: '100vh',
	borderRadius: '0px',

	'.tutorial-walkthrough-cancel-button': {
		position: 'absolute',
		top: 24,
		right: 24,
	},
	'.tutorial-walkthrough-welcome-text': {
		display: 'flex',
		flexDirection: 'column',
		gap: 40,
		paddingTop: 64,
		paddingInline: 40,
	},

	'.tutorial-walkthrough-tutorial-text': {
		display: 'flex',
		flexDirection: 'column',
		gap: 40,
		paddingTop: 64,
		paddingInline: 40,
	},

	'.tutorial-walkthrough-carousel': {
		display: 'flex',
		justifyContent: 'center',
	},

	[theme.breakpoints.up('md')]: {
		display: 'flex',
		flexDirection: 'column',
		width: '750px',
		height: 'auto',
		minHeight: '732px',
		borderRadius: '12px',

		'& img': {
			width: '100%',
			borderRadius: '12px 12px 0px 0px',
		},

		'.tutorial-walkthrough-welcome-text': {
			padding: 48,
		},

		'.tutorial-walkthrough-tutorial-text': {
			padding: 64,
		},
	},
}))

const TutorialWalkthrough = () => {
	const { isNewUser } = useLookupContext()
	const matches = useMediaQuery((theme) => theme.breakpoints.up('md'))

	const [open, setOpen] = useState(isNewUser)
	const [currentTutorial, setCurrentTutorial] = useState(0)

	const tutorials = [
		{
			title: 'Welcome!',
			description:
				'Make yourself at home while we give you a quick tour on how to navigate the space.',
			image: matches ? TutorialWelcome : TutorialMobileWelcome,
		},
		{
			title: 'Your Ultimate Home Dashboard Unveiled',
			description:
				'Find an overview of all items home related and all the details about the home you purchased.',
			image: matches ? TutorialHome : TutorialMobileHome,
		},
		{
			title: 'Navigating the Homebuying Journey with Ease',
			description:
				'See where you are on the build phase of the home buying process and prepare for what’s coming next.',
			image: matches ? TutorialJourney : TutorialMobileJourney,
		},
		{
			title: 'Simplified & Streamlined File Organization',
			description:
				'No need to print your documents; download and keep track of your files in one digitized location.',
			image: matches ? TutorialDocuments : TutorialMobileDocuments,
		},
	]

	const handleNext = () => {
		// finish
		if (currentTutorial === tutorials.length - 1) handleClose()

		setCurrentTutorial((prev) => (prev + 1) % tutorials.length)
	}

	const handleBack = () => {
		// skip
		if (currentTutorial === 0) handleClose()

		setCurrentTutorial(
			(prev) => (prev - 1 + tutorials.length) % tutorials.length
		)
	}

	const handleClose = () => {
		setOpen(false)
	}

	const nextButtonText = 'Next'
	const backuttonText = 'Back'

	const skipButtonText = 'Not Now'
	const startoffButtonText = 'Show me around'
	const finishButtonText = 'Finish'

	const tutorial = tutorials[currentTutorial]

	const carouselContent = (
		<Box className="tutorial-walkthrough-carousel">
			{tutorials.slice(1).map((_, index) => (
				<Box
					key={index}
					bgcolor={
						index + 1 === currentTutorial ? 'primary.main' : 'primary.grey'
					}
					width="12px"
					height="12px"
					borderRadius="50%"
					mx="9px"
				/>
			))}
		</Box>
	)

	const welcomeContent = (
		<Box className="tutorial-walkthrough-welcome-text">
			<Box textAlign={'center'}>
				<Typography
					id="tutorial-title"
					variant={'titleXLarge'}
					color={'primary.main'}
					component={'div'}
					mb={1}
				>
					{tutorial.title}
				</Typography>
				<Typography
					id="tutorial-description"
					variant={'bodyXLarge'}
					color={'primary.main'}
				>
					{tutorial.description}
				</Typography>
			</Box>
			<Box display="flex" justifyContent={'center'} alignItems="center" gap={2}>
				<Button onClick={handleBack} variant={'secondary'}>
					{skipButtonText}
				</Button>
				<Button onClick={handleNext}>{startoffButtonText}</Button>
			</Box>
		</Box>
	)

	const tutorialContent = (
		<Box className="tutorial-walkthrough-tutorial-text">
			<Box textAlign={'left'}>
				<Typography
					id="tutorial-title"
					variant={'titleMedium'}
					color={'primary.main'}
					component={'div'}
					mb={1}
				>
					{tutorial.title}
				</Typography>
				<Typography
					id="tutorial-description"
					variant={'bodyMedium'}
					color={'primary.main'}
				>
					{tutorial.description}
				</Typography>
			</Box>
			<Box
				display="flex"
				justifyContent={'space-between'}
				alignItems="center"
				gap={2}
			>
				<Button onClick={handleBack} variant={'secondary'}>
					{backuttonText}
				</Button>
				{matches && carouselContent}
				<Button onClick={handleNext}>
					{currentTutorial === tutorials.length - 1
						? finishButtonText
						: nextButtonText}
				</Button>
			</Box>
			{!matches && carouselContent}
		</Box>
	)

	return (
		<StyledModal
			open={open}
			onClose={handleClose}
			aria-labelledby="tutorial-title"
			aria-describedby="tutorial-description"
		>
			<StyledBox>
				<Box className="tutorial-walkthrough-cancel-button">
					<IconButton
						onClick={handleClose}
						aria-label={'close'}
						color="primary"
					>
						<CloseIcon />
					</IconButton>
				</Box>
				<img src={tutorial.image} alt={tutorial.title} />
				{currentTutorial === 0 && welcomeContent}
				{currentTutorial > 0 && tutorialContent}
			</StyledBox>
		</StyledModal>
	)
}

export default TutorialWalkthrough
