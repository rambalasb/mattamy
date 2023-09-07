import RightArrow from 'assets/svgs/RightArrow'

export default {
	title: 'RightArrow',
	component: RightArrow,
}

export const Template = (args) => {
	return <RightArrow {...args} />
}

Template.args = {
	fillColor: '#000',
}
