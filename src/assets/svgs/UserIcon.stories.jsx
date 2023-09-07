import UserIcon from 'assets/svgs/UserIcon'

export default {
	title: 'UserIcon',
	component: UserIcon,
}

export const Template = (args) => {
	return <UserIcon {...args} />
}

Template.args = {
	fillColor: '#000',
}
