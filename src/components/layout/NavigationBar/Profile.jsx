import React from 'react'
import PropTypes from 'prop-types'
import { Box, Typography } from '@mui/material'
import Button from 'components/common/Buttons/Button'

const Profile = ({ fullName, email, handleLogout, ...props }) => {
	const logOutText = 'Log Out'

	return (
		<Box
			p={3}
			backgroundColor="secondary.main"
			borderRadius="12px"
			boxShadow="0px 0px 20px 0px #0000001F"
			gap={3}
			width="274px"
			height="190px"
			{...props}
		>
			<Box m={1}>
				<Typography variant="titleXSmall" color={'common.white'}>
					{fullName}
				</Typography>
			</Box>
			<Box m={1}>
				<Typography variant="bodySmall" color={'common.white'}>
					{email}
				</Typography>
			</Box>
			<Box mt={2}>
				<Button
					variant={'secondary-dark'}
					// backgroundColor={'secondary.main'}
					width="100%"
					onClick={handleLogout}
				>
					{logOutText}
				</Button>
			</Box>
		</Box>
	)
}

Profile.propTypes = {
	fullName: PropTypes.string,
	email: PropTypes.string,
	handleLogout: PropTypes.func,
}

Profile.defaultProps = {
	fullName: 'Full Name',
	email: 'Email',
	handleLogout: undefined,
}

export default Profile
