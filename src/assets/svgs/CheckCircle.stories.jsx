import CheckCircle from 'assets/svgs/CheckCircle'

export default {
	title: 'CheckCircle',
	component: CheckCircle,
}

export const Template = (args) => {
	return <CheckCircle {...args} />
}

Template.args = {
	fillColor: '#000',
}
