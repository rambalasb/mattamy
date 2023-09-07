import BulletIcon from 'assets/svgs/BulletIcon'

export default {
	title: 'BulletIcon',
	component: BulletIcon,
}

export const Template = (args) => {
	return <BulletIcon {...args} />
}

Template.args = {
	fillColor: '#000',
}
