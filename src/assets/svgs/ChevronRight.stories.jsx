import CheveronRight from 'assets/svgs/ChevronRight'

export default {
	title: 'CheveronRight',
	component: CheveronRight,
}

export const Template = (args) => {
	return <CheveronRight {...args} />
}

Template.args = {
	fillColor: '#000',
}
