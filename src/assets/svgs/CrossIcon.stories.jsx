import CrossIcon from 'assets/svgs/CrossIcon'

export default {
	title: 'CrossIcon',
	component: CrossIcon,
}

export const Template = (args) => {
	return <CrossIcon {...args} />
}

Template.args = {
	fillColor: '#000',
}
