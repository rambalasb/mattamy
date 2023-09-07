import ErrorIcon from 'assets/svgs/ErrorIcon'

export default {
	title: 'ErrorIcon',
	component: ErrorIcon,
}

export const Template = (args) => {
	return <ErrorIcon {...args} />
}

Template.args = {
	fillColor: '#000',
}
