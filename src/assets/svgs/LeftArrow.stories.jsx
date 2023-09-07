import LeftArrow from 'assets/svgs/LeftArrow'

export default {
	title: 'LeftArrow',
	component: LeftArrow,
}

export const Template = (args) => {
	return <LeftArrow {...args} />
}

Template.args = {
	fillColor: '#000',
}
