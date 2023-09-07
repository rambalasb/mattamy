import UploadIcon from 'assets/svgs/UploadIcon'

export default {
	title: 'UploadIcon',
	component: UploadIcon,
}

export const Template = (args) => {
	return <UploadIcon {...args} />
}

Template.args = {
	fillColor: '#000',
}
