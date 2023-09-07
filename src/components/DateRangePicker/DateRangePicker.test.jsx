/* eslint-disable testing-library/prefer-screen-queries */
/* eslint-disable testing-library/no-node-access */
import { render } from '@testing-library/react'
import { composeStories } from '@storybook/testing-react'
import { userEvent } from '@storybook/testing-library'
import { startOfMonth, endOfMonth } from 'date-fns'

import * as stories from './DateRangePicker.stories'

import {
	mockSelectedDateRange,
	mockSelectedDateValue,
} from './DateRangePicker.mock'

import { getByClass } from 'utils/test.utils'
import { formatDateRange } from 'utils/date.utils'

const { DefaultTemplate, ExpandedViewTemplate } = composeStories(stories)

describe('<DateRangePicker />', () => {
	it('should render componenet', async () => {
		const { container, findByRole } = render(
			<DefaultTemplate selectedDateRange={mockSelectedDateRange} />
		)

		expect(container.firstChild).toBeTruthy()
		expect(await findByRole('textbox')).toHaveValue(mockSelectedDateValue)
	})

	test('click calender icon to show basic date range view', async () => {
		const { findByText, getByRole } = render(
			<DefaultTemplate selectedDateRange={mockSelectedDateRange} />
		)

		const dateRangeButton = getByRole('button')
		userEvent.click(dateRangeButton)

		expect(await findByText('January')).toBeVisible()
	})

	test('click calender icon to show expanded date range view', async () => {
		const { findByText, getByRole } = render(
			<ExpandedViewTemplate
				selectedDateRange={mockSelectedDateRange}
				hasExpanededView={true}
			/>
		)

		const dateRangeButton = getByRole('button')
		userEvent.click(dateRangeButton)

		expect(await findByText('last year')).toBeVisible()
	})

	test('clicking the clear button', async () => {
		const { container, getByRole, getByText } = render(
			<ExpandedViewTemplate
				selectedDateRange={mockSelectedDateRange}
				hasExpanededView={true}
			/>
		)

		const dateRangeButton = getByRole('button')
		userEvent.click(dateRangeButton)

		const selectedDay = getByClass(container, 'rdrStartEdge')
		expect(selectedDay).toHaveLength(1)

		const clearButton = getByText('Clear')
		userEvent.click(clearButton)

		expect(selectedDay).toHaveLength(0)
	})

	it('should be able to change selected date range', () => {
		const { container, getByPlaceholderText, getByRole } = render(
			<DefaultTemplate />
		)

		const dateRangeButton = getByRole('button')
		userEvent.click(dateRangeButton)

		const txtStartDate = getByPlaceholderText('Select a start date')
		userEvent.type(txtStartDate, 'Jan 1, 2023')

		const selectedDay = getByClass(container, 'rdrStartEdge')
		expect(selectedDay).toHaveLength(1)
	})

	it('should be able to apply clear changes', () => {
		const mockSetSelectedDateRange = jest.fn()

		const { getByText, getByTestId, getByRole } = render(
			<DefaultTemplate
				selectedDateRange={mockSelectedDateRange}
				setSelectedDateRange={mockSetSelectedDateRange}
			/>
		)

		const dateRangeButton = getByRole('button')
		userEvent.click(dateRangeButton)

		const clearButton = getByText('Clear')
		userEvent.click(clearButton)

		const applyButton = getByTestId('apply-button')
		userEvent.click(applyButton)

		const txtSelectedDateRange = getByTestId('txt-date-range')
		expect(txtSelectedDateRange).toHaveValue('')
	})

	it('should be able to apply new selected date range', () => {
		const mockSetSelectedDateRange = jest.fn()
		const start = startOfMonth(new Date())
		const end = endOfMonth(new Date())
		const thisMonth = [
			{
				startDate: start,
				endDate: end,
				key: 'selection',
			},
		]

		const { getByText, getByTestId, getByRole } = render(
			<ExpandedViewTemplate
				selectedDateRange={mockSelectedDateRange}
				setSelectedDateRange={mockSetSelectedDateRange}
				hasExpanededView={true}
			/>
		)

		const dateRangeButton = getByRole('button')
		userEvent.click(dateRangeButton)

		const thisMonthBtn = getByText('This Month')
		userEvent.click(thisMonthBtn)

		const applyButton = getByTestId('apply-button')
		userEvent.click(applyButton)

		const txtSelectedDateRange = getByTestId('txt-date-range')
		expect(txtSelectedDateRange).toHaveValue(formatDateRange(thisMonth))
	})
})
