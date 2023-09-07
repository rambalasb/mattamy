import SignOutIcon from 'assets/svgs/SignOutIcon'

export default {
	title: 'SignOutIcon',
	component: SignOutIcon,
}

export const Template = (args) => {
	return <SignOutIcon {...args} />
}

Template.args = {
	fillColor: '#000',
}
