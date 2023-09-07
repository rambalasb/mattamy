import LoadingIcon from 'assets/svgs/LoadingIcon'

export default {
	title: 'LoadingIcon',
	component: LoadingIcon,
}

export const Template = (args) => {
	return <LoadingIcon {...args} />
}

Template.args = {
	fillColor: '#000',
}
