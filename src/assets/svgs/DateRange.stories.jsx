import DateRange from 'assets/svgs/DateRange'

export default {
	title: 'DateRange',
	component: DateRange,
}

export const Template = (args) => {
	return <DateRange {...args} />
}

Template.args = {
	fillColor: '#000',
}
