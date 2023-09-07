import PlusIcon from 'assets/svgs/PlusIcon'

export default {
	title: 'PlusIcon',
	component: PlusIcon,
}

export const Template = (args) => {
	return <PlusIcon {...args} />
}

Template.args = {
	fillColor: '#000',
}
