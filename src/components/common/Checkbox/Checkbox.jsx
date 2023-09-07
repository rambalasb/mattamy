import * as React from 'react'
import { styled } from '@mui/material/styles'
import Checkbox from '@mui/material/Checkbox'
import { ReactComponent as Checked } from 'assets/svgs/common/checked.svg'
const BpIcon = styled('span')(({ theme }) => ({
	borderRadius: 50,
	width: 44,
	height: 44,
	padding: 0,
	border: '5px solid ' + theme.palette.primary.main,
}))

const BpCheckbox = (props) => {
	return (
		<Checkbox
			sx={{
				'&:hover': { bgcolor: 'transparent' },
			}}
			disableRipple
			color="default"
			checkedIcon={<Checked />}
			icon={<BpIcon />}
			inputProps={{ 'aria-label': 'Checkbox demo' }}
			{...props}
		/>
	)
}

export default function CustomizedCheckbox({ defaultValue }) {
	const [checked, setChecked] = React.useState(defaultValue)
	const handleChange = (event) => {
		setChecked(event.target.checked)
	}
	return (
		<>
			<BpCheckbox
				checked={checked}
				onChange={handleChange}
				inputProps={{ 'aria-label': 'controlled' }}
			/>
			{/* <BpCheckbox defaultChecked />
			<BpCheckbox disabled /> */}
		</>
	)
}
