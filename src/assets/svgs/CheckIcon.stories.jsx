import CheckIcon from 'assets/svgs/CheckIcon'

export default {
	title: 'CheckIcon',
	component: CheckIcon,
}

export const Template = (args) => {
	return <CheckIcon {...args} />
}

Template.args = {
	fillColor: '#000',
}
