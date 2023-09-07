import CheveronLeft from 'assets/svgs/ChevronLeft'

export default {
	title: 'CheveronLeft',
	component: CheveronLeft,
}

export const Template = (args) => {
	return <CheveronLeft {...args} />
}

Template.args = {
	fillColor: '#000',
}
