import React from 'react'
import PropTypes from 'prop-types'
import {
	Box as MuiBox,
	Card as MuiCard,
	Typography,
	styled,
	useMediaQuery,
} from '@mui/material'
import { ReactComponent as DownloadIcon } from 'assets/svgs/actions/download.svg'
import IconButton from 'components/common/Buttons/IconButton'

const StyledBox = styled(MuiBox)({
	display: 'flex',
	flexDirection: 'column',
	gap: 16,
})

const StyledCard = styled(MuiCard)(({ theme }) => ({
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',

	borderRadius: 8,
	padding: '12px 16px 12px 16px',
	gap: 8,
	backgroundColor: theme.palette.primary.lightBlue,
	boxShadow: 'none',
	height: 70,
	[theme.breakpoints.up('md')]: {
		height: 'auto',
		padding: '24px 16px 24px 24px',
	},
}))

const UploadedDocuments = ({ documents }) => {
	const isMobileScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'))

	return (
		<StyledBox>
			{documents.map((item, index) => (
				<StyledCard key={index}>
					<div>
						<Typography
							variant="titleSmall"
							color={'primary.main'}
							component={'div'}
						>
							{item.title}
						</Typography>
						<Typography
							variant={isMobileScreen ? 'bodyXSmall' : 'bodySmall'}
							color={'primary.main'}
							component={'div'}
						>
							{item.subtitle}
						</Typography>
					</div>
					<IconButton
						onClick={() => window.open(item.link, '_blank')}
						color={'secondary'}
					>
						<DownloadIcon />
					</IconButton>
				</StyledCard>
			))}
		</StyledBox>
	)
}

UploadedDocuments.propTypes = {
	documents: PropTypes.arrayOf(
		PropTypes.shape({
			title: PropTypes.string.isRequired,
			subtitle: PropTypes.string.isRequired,
			link: PropTypes.string.isRequired,
		})
	).isRequired,
}

export default UploadedDocuments
