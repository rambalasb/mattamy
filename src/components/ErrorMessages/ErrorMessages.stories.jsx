import ErrorMessage from '.'

export default {
	title: 'Error Messages',
	component: ErrorMessage,
	args: {
		messages: [
			'Please fill enter a correct email address',
			'Please do not leave First name.',
		],
	},
}

const Template = (args) => {
	return <ErrorMessage {...args} />
}

export const DefaultTemplate = Template.bind({})
