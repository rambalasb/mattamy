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

const YourCommunity = ({ division, name, description, image }) => {
	return (
		<StyledCard>
			<CardMedia component="img" height="296" image={image} alt={name} />
			<CardContent>
				<Box p={2}>
					<Typography
						variant="bodySmall"
						color={'secondary.main'}
						component={'div'}
					>
						{division}
					</Typography>
					<Typography
						variant="titleMedium"
						color={'primary.main'}
						component={'div'}
						fontSize={'26px'}
						lineHeight={'39px'}
						mb={2}
					>
						{name}
					</Typography>
					<Typography
						variant="bodySmall"
						color={'primary.main'}
						component={'div'}
					>
						{description}
					</Typography>
				</Box>
			</CardContent>
		</StyledCard>
	)
}

YourCommunity.propTypes = {
	division: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	image: PropTypes.node.isRequired,
}

export default YourCommunity
