import CheckBox from './CheckBox'

export default {
	title: 'CheckBox',
	component: CheckBox,
	args: {
		checkboxId: 'chkBasic',
		checkboxLabel: `I'm a checkbox`,
		checkboxName: 'chkBasic',
	},
}

const Template = (args) => {
	return <CheckBox {...args} />
}

export const DefaultTemplate = Template.bind({})

export const DisabledTemplate = Template.bind({})
DisabledTemplate.args = {
	isDisabled: true,
}

export const ErrorTemplate = Template.bind({})
ErrorTemplate.args = {
	hasError: true,
}
