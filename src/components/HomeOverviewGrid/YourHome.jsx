import React from 'react'
import PropTypes from 'prop-types'
import { styled } from '@mui/system'
import {
	Box,
	Card as MuiCard,
	CardContent,
	CardMedia,
	Typography,
} from '@mui/material'

const StyledCard = styled(MuiCard)({
	height: '100%',
})

const YourHome = ({ data, image }) => {
	return (
		<StyledCard sx={{ height: '100%' }}>
			<CardMedia
				component="img"
				height="296"
				image={image}
				alt={data.streetAddress}
			/>
			<CardContent>
				<Box p={2}>
					<Typography
						variant="bodySmall"
						color={'secondary.main'}
						component={'div'}
					>
						{data.unitType}
					</Typography>
					<Typography
						variant="titleMedium"
						color={'primary.main'}
						component={'div'}
						fontSize={'26px'}
						lineHeight={'39px'}
						mb={2}
					>
						{data.model}
					</Typography>
					<Typography
						variant="bodySmall"
						color={'primary.main'}
						component={'div'}
					>
						{data.streetAddress}, {data.cityAddress}, {data.provinceAddress},{' '}
						{data.postalCode} | Lot {data.jobLotId}
					</Typography>
					<Typography
						variant="bodySmall"
						color={'primary.main'}
						component={'div'}
					>
						{data.size} | {data.suiteType} | {data.fullBathType} |{' '}
						{data.halfBathType} | {data.garageType} Car Garage
					</Typography>
				</Box>
			</CardContent>
		</StyledCard>
	)
}

YourHome.propTypes = {
	data: PropTypes.shape({
		elevation: PropTypes.string.isRequired,
		model: PropTypes.string.isRequired,
		cityAddress: PropTypes.string.isRequired,
		streetAddress: PropTypes.string.isRequired,
		provinceAddress: PropTypes.string.isRequired,
		postalCode: PropTypes.string.isRequired,
		jobLotId: PropTypes.string.isRequired,
		size: PropTypes.string.isRequired,
		suiteType: PropTypes.string.isRequired,
		fullBathType: PropTypes.string.isRequired,
		halfBathType: PropTypes.string.isRequired,
		garageType: PropTypes.string.isRequired,
	}).isRequired,
	image: PropTypes.node.isRequired,
}

export default YourHome
