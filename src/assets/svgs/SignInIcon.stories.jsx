import SignInIcon from 'assets/svgs/SignInIcon'

export default {
	title: 'SignInIcon',
	component: SignInIcon,
}

export const Template = (args) => {
	return <SignInIcon {...args} />
}

Template.args = {
	fillColor: '#000',
}
