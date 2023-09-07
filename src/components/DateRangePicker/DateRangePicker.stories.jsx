import { useState } from 'react'

import DateRangePicker from '.'

import { mockSelectedDateRange } from './DateRangePicker.mock'

export default {
	title: 'DateRangePicker',
	component: DateRangePicker,
}

export const DefaultTemplate = (args) => {
	const [selectedDateRange, setSelectedDateRange] = useState(
		mockSelectedDateRange
	)
	return (
		<DateRangePicker
			{...args}
			selectedDateRange={selectedDateRange}
			setSelectedDateRange={setSelectedDateRange}
		></DateRangePicker>
	)
}
DefaultTemplate.args = {
	inputValue: '',
}

export const ExpandedViewTemplate = (args) => {
	const [selectedDateRange, setSelectedDateRange] = useState(
		mockSelectedDateRange
	)

	return (
		<DateRangePicker
			{...args}
			selectedDateRange={selectedDateRange}
			setSelectedDateRange={setSelectedDateRange}
		></DateRangePicker>
	)
}

ExpandedViewTemplate.args = {
	inputValue: '',
	hasExpandedView: true,
}
