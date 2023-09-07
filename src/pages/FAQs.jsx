import { Box, Typography } from '@mui/material'
import useMediaQuery from '@mui/material/useMediaQuery'
import { ControlledAccordion } from 'components/common/Accordian/ControlledAccordian'
import { useEffect, useMemo, useState } from 'react'
import { Chip } from 'components/common/Chip/Chip'

export const FAQs = () => {
	const matches = useMediaQuery((theme) => theme.breakpoints.down('sm'))
	const [filterOptions, setFilterOptions] = useState([])
	const [questions, setQuestions] = useState([])

	const allQuestions = useMemo(() => {
		return [
			{
				question: 'How do I change my email address?',
				answer:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ',
				type: 'profileInfo',
			},
			{
				question: 'Can I add more people to my account?',
				answer:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ',
				type: 'profileInfo',
			},
			{
				question: 'Why can’t I see my home displayed?',
				answer:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ',
				type: 'profileInfo',
			},
			{
				question: 'Why are some of my documents missing?',
				answer:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ',
				type: 'documents',
			},
			{
				question: 'Can I log in through different social accounts?',
				answer:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ',
				type: 'accountSupport',
			},
			{
				question: 'Why hasn’t my completion tracker been updated recently?',
				answer:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ',
				type: 'accountSupport',
			},
		]
	}, [])

	// Initial Values and counts for filters and questions
	useEffect(() => {
		let filters = [
			{
				label: 'Profile Information',
				type: 'profileInfo',
				selected: false,
				count: 0,
			},
			{
				label: 'Documents',
				type: 'documents',
				selected: false,
				count: 0,
			},
			{
				label: 'Sales office',
				type: 'salesOffice',
				selected: false,
				count: 0,
			},
			{
				label: 'Account support',
				type: 'accountSupport',
				selected: false,
				count: 0,
			},
		]
		for (const question of allQuestions) {
			let filterIndex = filters.findIndex(
				(filter) => filter.type === question.type
			)
			filters[filterIndex].count++
		}
		filters.unshift({
			label: 'All Questions',
			type: 'all',
			selected: true,
			count: allQuestions.length,
		})
		setFilterOptions(filters)
		setQuestions(allQuestions)
	}, [allQuestions])

	// Filter FAQ by Category
	const filterHandler = (selectedFilter, index) => {
		// Change Button State
		if (index !== null) {
			filterOptions.map((f, i) =>
				i === index ? (f.selected = true) : (f.selected = false)
			)
			setFilterOptions(filterOptions)
		}
		// Filter Question based on selection or all questions
		if (selectedFilter.type === 'all') {
			setQuestions(allQuestions)
		} else {
			let filteredQuestions = allQuestions.filter(
				(q) => q.type === selectedFilter.type
			)
			setQuestions(filteredQuestions)
		}
	}
	return (
		<Box
			sx={{
				mt: ['64px', '96px'],
				px: ['16px', '120px'],
			}}
		>
			<div>
				<Typography color="primary.main" variant="titleLarge">
					FREQUENTLY ASKED QUESTIONS
				</Typography>
			</div>
			<div>
				<Typography color="primary.main" variant="bodyMedium">
					Nullam diam id vitae quam mattis lectus. Risus dictum pharetra et
					mauris velit mauris enim odio feugiat. Suspendisse suspendisse at
					gravida id. Nulla nunc orci eros odio. Sed purus massa.
				</Typography>
			</div>
			<div style={{ marginTop: '64px' }}>
				<Typography color="primary.main" variant="textLink">
					FILTER BY CATEGORY
				</Typography>
			</div>

			{/* Mobile View of Filters - Dropdown menu */}
			{matches && <div>Mobile Screen</div>}

			{/* Desktop View of Filters - Buttons */}
			{!matches && filterOptions && (
				<Box sx={{ mt: '16px', mb: '32px' }}>
					{filterOptions.map((item, index) => {
						return (
							<Chip
								key={index}
								onClick={() => filterHandler(item, index)}
								style={{ marginRight: '8px' }}
								label={item.label + ' (' + item.count + ')'}
								variant={
									item.count === 0
										? 'disabled'
										: item.selected
										? 'selected'
										: !item.selected
										? 'unselected'
										: ''
								}
							></Chip>
						)
					})}
				</Box>
			)}
			<ControlledAccordion accordianData={questions}></ControlledAccordion>
		</Box>
	)
}
