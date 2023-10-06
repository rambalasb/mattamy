import React from 'react'
import PropTypes from 'prop-types'
import {
	Box,
	Drawer as MuiDrawer,
	Typography,
	useMediaQuery,
} from '@mui/material'
import { ReactComponent as CloseIcon } from 'assets/svgs/actions/close.svg'
import IconButton from 'components/common/Buttons/IconButton'

const Drawer = ({ isOpen, toggleDrawer }) => {
	const isDesktopView = useMediaQuery((theme) => theme.breakpoints.up('md'))

	const tag = 'More Details'
	const title = 'Design Your Dream Home'
	const subTitle = 'Architectural Choice Options'
	const longDescription =
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.'

	const drawerProps = [
		{
			anchor: 'bottom',
			PaperProps: {
				style: {
					height: '85%',
				},
			},
		},
		{
			anchor: 'right',
			PaperProps: {
				style: {
					width: 643,
				},
			},
		},
	]

	return (
		<MuiDrawer
			open={isOpen}
			onClose={toggleDrawer}
			{...drawerProps[Number(isDesktopView)]}
		>
			<Box role="presentation" px={6} py={2}>
				<Box display="flex" justifyContent="flex-end">
					<IconButton
						onClick={toggleDrawer}
						aria-label={'close'}
						color="primary"
					>
						<CloseIcon />
					</IconButton>
				</Box>
				<Box>
					<Typography variant="titleXSmall" color="secondary.main">
						{tag}
					</Typography>
				</Box>
				<Box mb={2}>
					<Typography variant="titleLarge" color="primary.main">
						{title}
					</Typography>
				</Box>
				<Box my={2}>
					<Typography variant="titleSmall" color="primary.main">
						{subTitle}
					</Typography>
				</Box>
				<Box mb={2}>
					<Typography variant="bodySmall" color="primary.main">
						{longDescription}
					</Typography>
				</Box>
			</Box>
		</MuiDrawer>
	)
}

Drawer.propTypes = {
	isOpen: PropTypes.bool,
	toggleDrawer: PropTypes.func.isRequired,
}

Drawer.defaultProps = {
	isOpen: false,
}

export default Drawer
