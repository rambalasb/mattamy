import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { useAccount, useMsal } from '@azure/msal-react'

import {
	Box,
	Drawer,
	ClickAwayListener,
	useTheme,
	useMediaQuery,
} from '@mui/material'
import NavButton from 'components/common/Buttons/NavButton'
import IconButton from 'components/common/Buttons/IconButton'
import DropdownButton from 'components/common/Buttons/DropdownButton'
import { ReactComponent as MattamyHomesIcon } from 'assets/svgs/mattamyHomesIcon.svg'
import { ReactComponent as CloseIcon } from 'assets/svgs/actions/close.svg'
import { ReactComponent as MenuIcon } from 'assets/svgs/actions/menu.svg'
import Profile from './Profile'

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
]

const NavigationBar = () => {
	const [drawerOpen, setDrawerOpen] = useState(false)
	const [profileOpen, setProfileOpen] = useState(false)
	const theme = useTheme()
	const matches = useMediaQuery(theme.breakpoints.up('md'))
	const navigate = useNavigate()

	const handleProfileToggle = () => {
		setProfileOpen((prev) => !prev)
	}

	const handleProfileClose = () => {
		setProfileOpen(false)
	}

	const { instance, accounts } = useMsal()
	const account = useAccount(accounts[0] || {})

	const navigationHandler = (route) => {
		navigate(route)
	}

	const handleDrawerToggle = () => {
		setDrawerOpen((prevState) => !prevState)
	}

	const handleLogout = async () => {
		sessionStorage.clear()
		instance.logoutRedirect({
			onRedirectNavigate: () => {
				return true
			},
		})
	}

	const myAccountText = 'My Account'

	return (
		<>
			<Box
				display="flex"
				justifyContent="space-between"
				alignItems="center"
				mx={1}
			>
				<span>
					<MattamyHomesIcon
						width={matches ? '220px' : '157px'}
						height={matches ? '108px' : '78px'}
					/>
				</span>
				{matches ? (
					<>
						<Box display="flex">
							{navItems.map((item, index) => (
								<NavButton
									key={index}
									onClick={navigationHandler.bind(this, item.route)}
								>
									{item.label}
								</NavButton>
							))}
						</Box>
						<Box component="span">
							<Box position="relative" mx={4}>
								<DropdownButton
									onClick={handleProfileToggle}
									expanded={profileOpen}
								>
									{myAccountText}
								</DropdownButton>

								{profileOpen && (
									<ClickAwayListener onClickAway={handleProfileClose}>
										<div>
											<Profile
												handleLogout={handleLogout}
												fullName={account?.name}
												email={account?.username}
												position="absolute"
												top="100%"
												right="0"
												mt={1}
											/>
										</div>
									</ClickAwayListener>
								)}
							</Box>
						</Box>
					</>
				) : (
					<Box mr={2}>
						<IconButton onClick={handleDrawerToggle}>
							<MenuIcon />
						</IconButton>
					</Box>
				)}
			</Box>

			{/* mobile nav bar */}
			<Drawer
				anchor="right"
				open={matches ? false : drawerOpen}
				onClose={handleDrawerToggle}
				PaperProps={{
					style: {
						width: '100%',
					},
				}}
			>
				<Box role="presentation">
					<Box
						display={'flex'}
						justifyContent={'space-between'}
						alignItems={'center'}
						mx={1}
					>
						<Box component="span">
							<MattamyHomesIcon width={'157px'} height={'78px'} />
						</Box>
						<Box mr={2}>
							<IconButton onClick={handleDrawerToggle} color={'secondary'}>
								<CloseIcon />
							</IconButton>
						</Box>
					</Box>
					<Box display="flex" flexDirection={'column'}>
						{navItems.map((item, index) => (
							<NavButton
								key={index}
								onClick={navigationHandler.bind(this, item.route)}
							>
								{item.label}
							</NavButton>
						))}
					</Box>
					<Profile
						handleLogout={handleLogout}
						fullName={account?.name}
						email={account?.username}
						position="fixed"
						bottom="0"
						m={3}
						width="fill-available"
					/>
				</Box>
			</Drawer>
		</>
	)
}

export default NavigationBar
