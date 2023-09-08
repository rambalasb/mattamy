import * as React from 'react'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import { styled } from '@mui/material/styles'
import InputBase from '@mui/material/InputBase'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import { Typography } from '@mui/material'
import { useEffect } from 'react'

const CustomInputBase = styled(InputBase)(({ theme, variant, ...props }) => {
	// Varients
	let textColor, bgColor, borderColor
	switch (variant) {
		case 'secondary':
			textColor = theme.palette.primary.main
			bgColor = theme.palette.common.white
			borderColor = theme.palette.primary.main
			break
		case 'primary':
		default:
			textColor = theme.palette.common.white
			bgColor = theme.palette.secondary.main
			borderColor = theme.palette.secondary.main
			break
	}
	return {
		'label + &': {
			marginTop: theme.spacing(0),
		},
		'& .MuiInputBase-input': {
			fontFamily: 'TradeGothicBoldCondensed',
			fontWeight: 'bold',
			fontSize: '16px',
			// lineHeight: '20px',
			letterSpacing: '2.5%',
			border: '2px solid',
			color: textColor,
			backgroundColor: bgColor,
			borderColor: borderColor,
			borderRadius: '12px',
			padding: '18px 20px',
			margin: '8px 0',
		},

		'& .MuiSelect-icon': {
			color: textColor,
		},
		'&:focus': {
			borderRadius: '12px',
		},
		'.MuiMenuItem-root': {
			backgroundColor: 'red',
		},
	}
})

export const Dropdown = ({ values, ...props }) => {
	const [selectedFilter, setSelectedFilter] = React.useState('')

	// Set default value for dropdown
	useEffect(() => {
		if (values.length > 0) {
			setSelectedFilter(values[0].type)
		}
	}, [values])

	// Set the value of dropdown and send value to parent component
	const handleChange = (event) => {
		setSelectedFilter(event.target.value)
		props.onSelectionUpdate(event.target.value)
	}

	return (
		<div>
			<FormControl>
				<Select
					componentsProps={{
						listbox: {
							sx: { backgroundColor: 'red' },
						},
					}}
					value={selectedFilter}
					onChange={handleChange}
					displayEmpty
					inputProps={{ 'aria-label': 'Without label' }}
					input={<CustomInputBase variant={props.variant} />}
					IconComponent={KeyboardArrowDownIcon}
				>
					{values.length > 0 &&
						values.map((val, i) => (
							<MenuItem key={i} value={val.type}>
								<Typography color="primary.main" variant="linkFilter">
									{val.label}
								</Typography>
							</MenuItem>
						))}
				</Select>
			</FormControl>
		</div>
	)
}
