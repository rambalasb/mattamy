import DownloadIcon from 'assets/svgs/DownloadIcon'

export default {
	title: 'DownloadIcon',
	component: DownloadIcon,
}

export const Template = (args) => {
	return <DownloadIcon {...args} />
}

Template.args = {
	fillColor: '#000',
}
