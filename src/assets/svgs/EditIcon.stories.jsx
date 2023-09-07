import EditIcon from 'assets/svgs/EditIcon'

export default {
	title: 'EditIcon',
	component: EditIcon,
}

export const Template = (args) => {
	return <EditIcon {...args} />
}

Template.args = {
	fillColor: '#000',
}
