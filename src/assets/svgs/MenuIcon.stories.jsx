import MenuIcon from 'assets/svgs/MenuIcon'

export default {
	title: 'MenuIcon',
	component: MenuIcon,
}

export const Template = (args) => {
	return <MenuIcon {...args} />
}

Template.args = {
	fillColor: '#000',
}
