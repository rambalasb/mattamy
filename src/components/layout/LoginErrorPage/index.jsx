const { Outlet } = require('react-router-dom')
import LoginBackgroundImage from 'assets/images/LoginErrorBg.png'
import MattamyLogo from 'assets/svgs/mattamyHomesIcon.svg'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'
import { Link, useLocation } from 'react-router-dom'
import { UnauthenticatedTemplate } from '@azure/msal-react'

const Footer = styled(Grid)(({ theme }) => ({
	backgroundColor: theme.palette.primary.darkGrey,
	textAlign: 'center',
	color: theme.palette.common.white,
	marginTop: '128px',
	'.copyrights, .contacts': {
		padding: '40px 0',
	},
	a: {
		color: theme.palette.common.white,
		textDecoration: 'none',
	},
	[theme.breakpoints.down('sm')]: {
		marginTop: 0,
		'.copyrights, .contacts': {
			padding: '20px',
		},
	},
}))

const LoginErrorPage = () => {
	const location = useLocation()
	return (
		<>
			<UnauthenticatedTemplate>
				<Box
					sx={{
						backgroundImage:
							location.pathname === '/error'
								? `url(${LoginBackgroundImage})`
								: 'none',
						backgroundPosition: 'center',
						backgroundSize: 'cover',
						backgroundRepeat: 'no-repeat',
						// height: '100vh',
						// width: '100%',
					}}
				>
					<img src={`${MattamyLogo}`} alt="Mattamy Homes Logo" />
					<Outlet />
					<Footer container item xs={12}>
						<Grid className="copyrights" item xs={12} sm={12} md={6} lg={6}>
							<Typography variant="linkFilter">
								&copy; 2023 Mattamy Homes. Prices are subject to change. E & OE.
							</Typography>
						</Grid>
						<Grid className="contacts" item xs={12} sm={12} md={6} lg={6}>
							<Typography variant="linkFilter">
								<Link to="/error/accountSupport">
									Need help? View &quot;Account Support&quot;
								</Link>
							</Typography>
						</Grid>
					</Footer>
				</Box>
			</UnauthenticatedTemplate>
		</>
	)
}

export default LoginErrorPage
