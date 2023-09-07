import CloseIcon from 'assets/svgs/CloseIcon'

export default {
	title: 'CloseIcon',
	component: CloseIcon,
}

export const Template = (args) => {
	return <CloseIcon {...args} />
}

Template.args = {
	fillColor: '#000',
}
