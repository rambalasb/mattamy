import React from 'react'
import PropTypes from 'prop-types'
import { Box, Typography } from '@mui/material'
import { styled } from '@mui/system'
import { ReactComponent as CollegeOrUniversity } from 'assets/svgs/iconography/collegeOrUniversity.svg'
import IconLink from 'components/common/Links/IconLink'

const StyledBox = styled(Box)(({ theme }) => ({
	padding: '16px 24px 16px 24px',
	borderRadius: '8px',
	gap: '16px',
	backgroundColor: theme.palette.primary.main,
	boxShadow: '0px 0px 20px 0px #0000001F',
	display: 'flex',
	cursor: 'pointer',
	zIndex: 1,

	width: 'auto',
	height: '96px',
	bottom: 24,
	left: 24,
	right: 24,
	position: 'fixed',
	[theme.breakpoints.up('md')]: {
		width: '290px',
		top: 300,
		left: 24,
		bottom: 'auto',
		position: 'sticky',
	},
}))

const MattamyUniversity = ({ onClick }) => {
	const title = 'Mattamy University'
	const subTitle = 'Learn more'

	return (
		<Box position="absolute" top={700} left={24} height="100%">
			<StyledBox onClick={onClick}>
				<Box
					width={64}
					height={64}
					display={'flex'}
					alignItems={'center'}
					justifyContent={'center'}
					borderRadius={'50%'}
					position="relative"
					backgroundColor={'primary.lightBlue'}
				>
					<CollegeOrUniversity width={48} height={48} />
				</Box>
				<Box display={'felx'} flexDirection={'row'} pt={1}>
					<div>
						<Typography
							variant="titleSmall"
							color="common.white"
							paddingLeft={'4px'}
						>
							{title}
						</Typography>
					</div>
					<div>
						<IconLink variant="primary-dark" iconType="view">
							{subTitle}
						</IconLink>
					</div>
				</Box>
			</StyledBox>
		</Box>
	)
}

MattamyUniversity.propTypes = {
	onClick: PropTypes.func.isRequired,
}

MattamyUniversity.defaultProps = {}

export default MattamyUniversity
