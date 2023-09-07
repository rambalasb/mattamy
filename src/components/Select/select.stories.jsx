import Select from '.'

import { mockMultiSelectOptions, mockSelectOptions } from './Select.mock'

export default {
	title: 'Select',
	component: Select,
	args: {
		selectId: 'drpSelect',
		placeholder: 'Please Select a dog bread:',
		options: mockSelectOptions,
	},
}

export const DefaultTemplate = (args) => {
	return <Select {...args} />
}

export const ErrorTemplate = (args) => {
	return <Select {...args} hasError={true} />
}

export const DisabledTemplate = (args) => {
	return <Select {...args} isDisabled={true} />
}

export const MultiSelectTemplate = (args) => {
	return <Select {...args} />
}
MultiSelectTemplate.args = {
	selectId: 'drpMultiSelect',
	placeholder: 'Please select some pokemon:',
	options: mockMultiSelectOptions,
	isMulti: true,
	onChangeHandler: (value) => value,
}
