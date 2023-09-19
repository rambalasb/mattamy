import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import MenuIcon from '@mui/icons-material/Menu'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { useAccount, useIsAuthenticated, useMsal } from '@azure/msal-react'
import { loginRequest } from '../../../authConfig'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import {
	InteractionStatus,
	InteractionType,
	// InteractionRequiredAuthError,
} from '@azure/msal-browser'

const drawerWidth = 240
const navItems = [
	{
		label: 'MY HOME',
		route: '/',
	},
	{
		label: 'MY JOURNEY',
		route: '/myJourney',
	},
	{
		label: 'MY DOCUMENTS',
		route: '/myDocuments',
	},
	{
		label: 'FAQs',
		route: '/FAQ',
	},
]

const NavigationBar = (props) => {
	// const isAuthenticated = useIsAuthenticated()
	const { instance, inProgress, accounts } = useMsal()
	// const account = useAccount(accounts[0] || {})

	// const handleLoginRedirect = async () => {
	// 	instance.loginRedirect(loginRequest).catch((error) => console.log(error))
	// }

	// if (inProgress === InteractionStatus.None && !isAuthenticated) {
	// 	// instance.loginRedirect(loginRequest);
	// 	handleLoginRedirect()
	// }

	// useEffect(() => {
	// 	// Check if account object exists
	// 	if (account) {
	// 		// If it does then acquire an accessToken
	// 		instance
	// 			.acquireTokenSilent({
	// 				...loginRequest,
	// 				account: account,
	// 			})
	// 			.then((response) => {
	// 				console.log('acquireTokenSilent response', response)
	// 				// axios
	// 				// 	.post('/api/v2/auth/aad_token/validate/', {
	// 				// 		access_token: response.accessToken,
	// 				// 		id_token: response.idToken,
	// 				// 		oid: response.uniqueId,
	// 				// 	})
	// 				// 	.then((response) => {
	// 				// 		console.log(response.data)
	// 				// 	})
	// 				// 	.catch((error) => {
	// 				// 		console.log(error)
	// 				// 	})
	// 			})
	// 	}
	// }, [])

	const { window } = props
	const [mobileOpen, setMobileOpen] = React.useState(false)

	const handleDrawerToggle = () => {
		setMobileOpen((prevState) => !prevState)
	}

	const handleLogout = () => {
		instance.logoutRedirect()
	}

	const navigate = useNavigate()
	const navigationHandler = (route) => {
		navigate(route)
	}

	const drawer = (
		<Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
			<Typography variant="h6" sx={{ my: 2 }}>
				MATTAMY HOMES
			</Typography>
			<Divider />
			<List>
				{navItems.map((item, index) => (
					<ListItem
						onClick={navigationHandler.bind(this, item.route)}
						key={index}
						disablePadding
					>
						<ListItemButton sx={{ textAlign: 'center' }}>
							<ListItemText primary={item.label} />
						</ListItemButton>
					</ListItem>
				))}
			</List>
		</Box>
	)

	const container =
		window !== undefined ? () => window().document.body : undefined

	return (
		<Box sx={{ display: 'flex' }}>
			<CssBaseline />
			<AppBar component="nav">
				<Toolbar>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						edge="start"
						onClick={handleDrawerToggle}
						sx={{ mr: 2, display: { sm: 'none' } }}
					>
						<MenuIcon />
					</IconButton>
					<Typography
						variant="h6"
						component="div"
						sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
					>
						MATTAMY HOMES
					</Typography>
					<Box sx={{ display: { xs: 'none', sm: 'block' } }}>
						{navItems.map((item, index) => (
							<Button
								disableRipple
								onClick={navigationHandler.bind(this, item.route)}
								key={index}
								sx={{ color: '#fff' }}
							>
								{item.label}
							</Button>
						))}
						<Button onClick={handleLogout} sx={{ color: '#fff' }}>
							LOGOUT
						</Button>
					</Box>
				</Toolbar>
			</AppBar>
			<Box component="nav">
				<Drawer
					container={container}
					variant="temporary"
					open={mobileOpen}
					onClose={handleDrawerToggle}
					ModalProps={{
						keepMounted: true, // Better open performance on mobile.
					}}
					sx={{
						display: { xs: 'block', sm: 'none' },
						'& .MuiDrawer-paper': {
							boxSizing: 'border-box',
							width: drawerWidth,
						},
					}}
				>
					{drawer}
				</Drawer>
			</Box>
			<Box component="main">
				<Toolbar />
			</Box>
		</Box>
	)
}

export default NavigationBar
