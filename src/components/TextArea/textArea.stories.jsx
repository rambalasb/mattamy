import TextArea from '.'

export default {
	title: 'TextArea',
	component: TextArea,
	args: {
		textAreaId: 'txtTemplate',
		textAreaName: 'Description',
		textAreaSubtext: 'Enter a desciption about yourself',
	},
}

const Template = (args) => {
	return <TextArea {...args}></TextArea>
}

export const BasicTemplate = Template.bind({})

export const DisabledTemplate = Template.bind({})
DisabledTemplate.args = {
	isDisabled: true,
}

export const ErrorTemplate = Template.bind({})
ErrorTemplate.args = {
	hasError: true,
	errorMessage: 'A description is required',
}
