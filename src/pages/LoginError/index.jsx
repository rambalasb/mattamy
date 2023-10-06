import { ReactComponent as ErrorIcon } from 'assets/svgs/actions/incomplete.svg'
import { ReactComponent as CloseIcon } from 'assets/svgs/actions/close.svg'
import MuiCard from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'
import Grid from '@mui/material/Grid'
import { Link } from 'react-router-dom'

const Card = styled(MuiCard)(({ theme }) => ({
	padding: theme.spacing('72px 80px'),
	backgroundColor: theme.palette.primary.main,
	color: theme.palette.common.white,
	textAlign: 'center',
	marginBotton: '128px',
	'.error-message': {
		position: 'relative',
		backgroundColor: theme.palette.common.white,
		color: theme.palette.primary.darkGrey,
		padding: '16px 64px 16px 56px',
		textAlign: 'left',
		margin: '15% 0',
		borderRadius: '8px',
		border: '2px solid ' + theme.palette.functional.urgency,
	},
	'.error-message a': {
		color: theme.palette.primary.darkGrey,
		textDecoration: 'underline',
	},
	'.error-message .icon': {
		position: 'absolute',
		width: '18px',
		top: '18px',
		'&.error-icon': {
			color: theme.palette.functional.urgency,
		},
	},
	[theme.breakpoints.down('md')]: {
		padding: theme.spacing('64px 32px'),
		marginTop: 250,
	},
}))

const ErrorPage = () => {
	return (
		<Grid container>
			<Grid item xs></Grid>
			<Grid item xs={12} sm={8} md={6} lg={5}>
				<Card variant="outlined">
					<div id="header">
						<Typography variant="titleLarge">Mattamy Homes</Typography>
					</div>
					<div>
						<Typography variant="bodyMedium">
							To continue, select a social login using the same email that you
							were notified by Mattamy.
						</Typography>
					</div>
					<div className="error-message">
						<ErrorIcon
							className="icon error-icon"
							style={{ left: '16px' }}
							alt="Error Icon"
						/>
						<CloseIcon
							className="icon close-icon"
							style={{ right: '16px' }}
							alt="Close Icon"
						/>
						<Typography variant="bodySmall">
							<b>Oops! We couldn&apos;t sign you in right now.</b> Please
							double-check your email and try again or view our{' '}
							<Link className="link" to="/error/accountSupport">
								Account Support
							</Link>{' '}
							page for additional help.
						</Typography>
					</div>
					<div>
						<Typography variant="bodySmall">
							Please note, individuals from the Carrington Community who have
							received the email notification from their Mattamy representative
							will be able to access this portal at this time.
						</Typography>
					</div>
				</Card>
			</Grid>
			<Grid item xs></Grid>
		</Grid>
	)
}

export default ErrorPage
