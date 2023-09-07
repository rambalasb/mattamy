import { useState } from 'react'

import Alert from '.'

import EditIcon from 'assets/svgs/EditIcon'

export default {
	title: 'Alert',
	component: Alert,
	args: {
		alertId: 'alertExample',
		children: 'Hello World',
		type: 'error',
	},
}

const Template = ({ ...args }) => {
	const [mockIsOpen, setMockIsOpen] = useState(true)

	return (
		<Alert
			{...args}
			onClickHandler={() => {
				setMockIsOpen(!mockIsOpen)
			}}
			isOpen={mockIsOpen}
		></Alert>
	)
}

export const DefaultTemplate = Template.bind({})

export const OutlinedTemplate = Template.bind({})
OutlinedTemplate.args = {
	variant: 'outlined',
}

export const FilledTemplate = Template.bind({})
FilledTemplate.args = {
	variant: 'filled',
}

export const IconTemplate = Template.bind({})
IconTemplate.args = {
	children: (
		<div>
			<EditIcon /> Hello world
		</div>
	),
}
