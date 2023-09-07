/**
 *  Any mock data needed for testing the componenet or storybook will reside in this file.
 */
import { addDays } from 'date-fns'
import { formatDateRange } from 'utils/date.utils'

export const mockSelectedDateRange = [
	{
		startDate: new Date('Jan 13 2022'),
		endDate: addDays(new Date(), 7),
		key: 'selection',
	},
]

export const mockSelectedDateValue = formatDateRange(mockSelectedDateRange)
