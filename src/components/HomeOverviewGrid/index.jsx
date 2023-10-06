import React from 'react'
import { styled } from '@mui/system'
import { Box as MuiBox, Grid, Typography, useMediaQuery } from '@mui/material'
import UploadedDocuments from 'components/HomeOverviewGrid/UploadedDocuments'
import CompletionTracker from 'components/HomeOverviewGrid/CompletionTracker'
import IconLink from 'components/common/Links/IconLink'
import { useLookupContext } from 'contexts/LookupContext'
import YourHome from './YourHome'

import CardImageCommunitySample from 'assets/images/CardImageCommunitySample.jpeg'
import CardImageHomeSample from 'assets/images/CardImageHomeSample.jpeg'
import YourCommunity from './YourCommunity'

const Box = MuiBox

const StyledBox = styled(MuiBox)(({ theme }) => ({
	display: 'flex',
	alignItems: 'flex-start',
	// alignItems: 'stretch',
	flexDirection: 'column',
	flexWrap: 'nowrap',
	gap: 24,
	height: '100%',
	'.display-home-item-content': {
		flexGrow: 2,
		width: '100%',
		height: '100%',
	},
	[theme.breakpoints.up('md')]: {
		flexWrap: 'wrap',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		'.display-home-item-content': {
			order: 1,
		},
	},
}))

const DisplayHome = () => {
	const { divisions } = useLookupContext()
	const matches = useMediaQuery((theme) => theme.breakpoints.up('md'))

	const firstItem = {
		titleText: 'Overall Home Completion',
		linkText: 'View My Journey',
	}

	const secondItem = {
		titleText: 'Uploaded Documents',
		linkText: 'View More',
	}

	const thirdItem = {
		titleText: 'Your Home and Community',
		homeTitleText: 'Your Home',
		CommunityTitleText: 'Your Community',
		linkText: 'View Community Details',
	}

	const progressNumber = 85 // over 100

	const myHomeDocuments = [
		{
			title: 'Attic Photos',
			subtitle: 'Customer Care & Warranty | July 19, 2023',
			link: 'google.com',
		},
		{ title: 'Item Two', subtitle: 'Subtitle Two', link: 'google.com' },
		{ title: 'Item Three', subtitle: 'Subtitle Three', link: 'google.com' },
	]

	const yourHomeData = divisions[0]?.communities[0]?.lots[0]
	const yourDivisionName = divisions[0]?.divisionName
	const yourCommunityName = divisions[0]?.communities[0]?.communityName
	const yourCommunityDescription =
		'Carrington is a beautiful master-planned community that fosters active, healthy living and embraces its beautiful natural surroundings.'

	const viewCommunityIconLinkContent = (
		<IconLink
			iconType="view"
			target="_blank"
			href="https://mattamyhomes.com/alberta/calgary/calgary/carrington" // TODO: update link
		>
			{thirdItem.linkText}
		</IconLink>
	)

	return (
		<Grid container spacing={8} py={12}>
			{/* First Item */}
			<Grid item xs={12} md={7.5}>
				<StyledBox>
					<Typography color="primary.main" variant="titleMedium" noWrap>
						{firstItem.titleText}
					</Typography>
					<Box className="display-home-item-content">
						<CompletionTracker progress={progressNumber} />
					</Box>
					<IconLink iconType="view">{firstItem.linkText}</IconLink>
				</StyledBox>
			</Grid>

			{/* Second Item */}
			<Grid item xs={12} md={4.5}>
				<StyledBox>
					<Typography color="primary.main" variant="titleMedium" noWrap>
						{secondItem.titleText}
					</Typography>
					<Box className="display-home-item-content">
						<UploadedDocuments documents={myHomeDocuments} />
					</Box>
					<IconLink iconType="view">{secondItem.linkText}</IconLink>
				</StyledBox>
			</Grid>

			{/* Third Item */}
			<Grid item xs={12}>
				<Grid container spacing={8} alignItems={'stretch'}>
					{matches && (
						<Grid item xs={12} md={3}>
							<Typography color="primary.main" variant="titleMedium">
								{thirdItem.titleText}
							</Typography>
							{viewCommunityIconLinkContent}
						</Grid>
					)}
					<Grid item xs={12} md={4.5}>
						<StyledBox>
							{!matches && (
								<Typography color="primary.main" variant="titleMedium">
									{thirdItem.homeTitleText}
								</Typography>
							)}
							{yourHomeData && (
								<Box className="display-home-item-content">
									<YourHome data={yourHomeData} image={CardImageHomeSample} />
								</Box>
							)}
						</StyledBox>
					</Grid>
					<Grid item xs={12} md={4.5}>
						<StyledBox>
							{!matches && (
								<Typography color="primary.main" variant="titleMedium">
									{thirdItem.CommunityTitleText}
								</Typography>
							)}
							{yourDivisionName && (
								<Box className="display-home-item-content">
									<YourCommunity
										division={yourDivisionName}
										name={yourCommunityName}
										description={yourCommunityDescription}
										image={CardImageCommunitySample}
									/>
								</Box>
							)}
							{!matches && viewCommunityIconLinkContent}
						</StyledBox>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	)
}

export default DisplayHome
