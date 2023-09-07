import ArrowUp from 'assets/svgs/ArrowUp'

export default {
	title: 'ArrowUp',
	component: ArrowUp,
}

export const Template = (args) => {
	return <ArrowUp {...args} />
}

Template.args = {
	fillColor: '#000',
}
