/* eslint-disable array-callback-return */
import { format, isValid } from 'date-fns'

/**
 * 	A fucntion to format a date range
 *
 * @function
 *
 * @param {array} dateRange - An array of dates with a startDate and endDate
 * @param {string} divider - A string used to divide/seperate dates. Example: to - ,
 *
 * @returns a formated string ex. `2020-03-11 to 2022-01-01`
 */

export const formatDateRange = (dateRange, divider = '-') => {
	let formattedDateRange

	dateRange?.map((date) => {
		if (isValid(date.startDate) && isValid(date.endDate)) {
			formattedDateRange = `${format(
				date.startDate,
				'yyyy-MM-dd'
			)} ${divider} ${format(date.endDate, 'yyyy-MM-dd')}`
		}
	})

	return formattedDateRange
}

export const validateDate = (value) => {
	if (!isValid(new Date(value))) {
		return false
	}

	return true
}
