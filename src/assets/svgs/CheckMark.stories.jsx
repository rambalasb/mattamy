import CheckMark from 'assets/svgs/CheckMark'

export default {
	title: 'CheckMark',
	component: CheckMark,
}

export const Template = (args) => {
	return <CheckMark {...args} />
}

Template.args = {
	fillColor: '#000',
}
