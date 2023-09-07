import WarningIcon from 'assets/svgs/WarningIcon'

export default {
	title: 'WarningIcon',
	component: WarningIcon,
}

export const Template = (args) => {
	return <WarningIcon {...args} />
}

Template.args = {
	fillColor: '#000',
}
