import ExpiredIcon from 'assets/svgs/ExpiredIcon'

export default {
	title: 'ExpiredIcon',
	component: ExpiredIcon,
}

export const Template = (args) => {
	return <ExpiredIcon {...args} />
}

Template.args = {
	fillColor: '#000',
}
