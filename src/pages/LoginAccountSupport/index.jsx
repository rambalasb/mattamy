import ControlledAccordion from 'components/common/Accordian/ControlledAccordian'
import { Box, Typography, styled, useTheme } from '@mui/material'
import Grid from '@mui/material/Grid'
import { BackIcon } from 'assets/svgs/back'
import { useMsal } from '@azure/msal-react'

const LoginButtonGrid = styled(Grid)(({ theme }) => ({
	backgroundColor: theme.palette.primary.lightBlue,
	padding: '20px 120px',
	'.login-redirect': {
		cursor: 'pointer',
	},
	[theme.breakpoints.down('sm')]: {
		padding: '32px 16px',
	},
}))

const AccountSupportPage = () => {
	const { instance } = useMsal()
	const theme = useTheme()
	const handleLoginRedirect = async () => {
		await instance.loginRedirect()
	}
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
	return (
		<>
			<LoginButtonGrid item xs>
				<Typography
					className="login-redirect"
					color="primary.main"
					variant="button"
					onClick={handleLoginRedirect}
				>
					<span className="back-icon">
						{/* <StandardBackIcon width={'24px'} /> */}
						<BackIcon width="24px" fill={theme.palette.primary.main} />
					</span>
					RETURN TO LOGIN
				</Typography>
			</LoginButtonGrid>
			<Box
				sx={{
					mt: ['64px', '96px'],
					px: ['16px', '120px'],
				}}
			>
				<div>
					<Typography color="primary.main" variant="titleLarge">
						Having trouble logging into your account?
					</Typography>
				</div>
				<div>
					<Typography color="primary.main" variant="bodyMedium">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation.
					</Typography>
				</div>
				<Box
					sx={{
						mt: ['64px', '96px'],
					}}
				>
					<ControlledAccordion
						accordianData={accordianData}
					></ControlledAccordion>
				</Box>
			</Box>
		</>
	)
}

export default AccountSupportPage
