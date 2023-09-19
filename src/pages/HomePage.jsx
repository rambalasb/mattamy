import React from 'react'
import Button from 'components/common/Buttons/Button'
import { AuthenticatedTemplate } from '@azure/msal-react'
import { useMsal } from '@azure/msal-react'
import { Typography } from '@mui/material'
import { ControlledAccordion } from 'components/common/Accordian/ControlledAccordian'
import { CompletionCard } from 'components/common/CompletionCard/CompletionCard'
import { ChecklistCard } from 'components/common/ChecklistCard/ChecklistCard'
import { useNavigate } from 'react-router-dom'
import NavButton from 'components/common/Buttons/NavButton'

export const HomePage = () => {
	const { instance } = useMsal()
	const activeAccount = instance.getActiveAccount()
	// if (activeAccount) {
	// 	console.log(activeAccount.idTokenClaims)
	// }

	const accordianData = [
		{
			question: 'How do I create an account?',
			answer:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
		},
		{
			question: "I'm having trouble signing in. What should I do?",
			answer:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
		},
		{
			question:
				'I want to change my email address associated with the account. Is it possible?',
			answer:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
		},
		{
			question: 'Can I log in through different social accounts?',
			answer:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
		},
		{
			question: 'Can I use the same account on multiple devices?',
			answer:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
		},
		{
			question: 'How do I keep my account logged in?',
			answer:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
		},
	]

	const tasks = [
		{
			header: 'Complete this Activity',
			content:
				'Mark this activity as completed to get a Bonus Sticker and continue on your Mattamy Journey. ',
			isCompleted: false,
		},
		{
			header: 'Complete this Activity',
			content:
				'Mark this activity as completed to get a Bonus Sticker and continue on your Mattamy Journey. ',
			isCompleted: true,
		},
	]

	const checklist = [
		{
			header: 'Create an Appointment to Meet Your Team - Virtual or In-Person',
			content:
				'Find a time that works well for both parties. The session will take 15 minutes and is designed to introduce you to your team and establish expectations for your home. The meeting can take place either virtually or in-person, depending on your availability. ',
			checked: true,
		},
		{
			header: 'Create an Appointment to Meet Your Team - Virtual or In-Person',
			content:
				'Find a time that works well for both parties. The session will take 15 minutes and is designed to introduce you to your team and establish expectations for your home. The meeting can take place either virtually or in-person, depending on your availability. ',
			checked: false,
		},
	]

	let navigate = useNavigate()
	const redirectToError = () => {
		console.log('inside redirect')
		navigate('/error')
		// instance.logoutRedirect({ postLogoutRedirectUri: '/error' })
	}

	const handleFileDownload = () => {
		// using Java Script method to get PDF file
		fetch('https://www.orimi.com/pdf-test.pdf', {
			method: 'POST',
			mode: 'no-cors',
		}).then((response) => {
			response.blob().then((blob) => {
				// Creating new object of PDF file
				const fileURL = window.URL.createObjectURL(blob)
				// Setting various property values
				let alink = document.createElement('a')
				alink.href = fileURL
				alink.download = 'pdf-test.pdf'
				alink.click()
				alink.parentNode.removeChild(alink)
			})
		})
	}
	return (
		<>
			{/* <AuthenticatedTemplate> */}
			<Typography variant="h6">User Details</Typography>
			{/* {activeAccount ? <div>{activeAccount.idTokenClaims}</div> : null} */}
			{activeAccount
				? Object.keys(activeAccount.idTokenClaims).map((key, index) => {
						return (
							<div key={key}>
								{key} ----- {activeAccount.idTokenClaims[key]}
							</div>
						)
				  })
				: null}
			<section style={{ width: '20%' }}>
				<Button>Button</Button>
				<Button onClick={handleFileDownload} variant="primary-dark">
					DOWNLOAD FILE
				</Button>
				<Button onClick={redirectToError} variant="secondary">
					Redirect to Error
				</Button>
				<Button variant="secondary-dark">Button</Button>
				<Button disable>Button</Button>
			</section>
			<section>
				<NavButton>My home</NavButton>
			</section>
			<br></br>
			<Typography variant="titleLarge">Accordian Component</Typography>
			<ControlledAccordion accordianData={accordianData}></ControlledAccordion>
			<br></br>
			<Typography variant="titleLarge">Completion Card Component</Typography>
			<CompletionCard tasks={tasks}></CompletionCard>
			<br></br>
			<Typography variant="titleLarge">Checklist Card Component</Typography>
			<ChecklistCard checklist={checklist}></ChecklistCard>
			{/* </AuthenticatedTemplate> */}
		</>
	)
}
