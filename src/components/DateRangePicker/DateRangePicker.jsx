/**
 *  react-date-range library was used to create this componenet
 * 	for further information about this library you can go to
 * 	https://github.com/hypeserver/react-date-range#readme or
 * 	https://hypeserver.github.io/react-date-range/ for a live demo.
 */

import { useState, useEffect, useCallback, useRef } from 'react'
import PropTypes from 'prop-types'
import {
	DateRange as DR,
	DateRangePicker as DRP,
	defaultStaticRanges,
} from 'react-date-range'
import { addYears, startOfYear, endOfYear, isSameDay } from 'date-fns'

import Button from 'components/Buttons/Button'
import ButtonLink from 'components/Buttons/ButtonLink'
import TextBoxButton from 'components/TextBoxes/TextBoxButton'

import DateRange from 'assets/svgs/DateRange'
import CrossIcon from 'assets/svgs/CrossIcon'

import { useClickOutSide } from 'utils/customHooks/useClickOutSide'
import { formatDateRange } from 'utils/date.utils'
import { testAttr } from 'utils/test.utils'

import './style.css'

export default function DateRangePicker({
	className,
	placeholder,
	selectedDateRange,
	setSelectedDateRange,
	monthsToShow,
	calendarDirection,
	dropdownPlacement,
	minDate,
	maxDate,
	ariaLabels,
	label,
	errorMessage,
	hasError,
	isDisabled,
	hasExpandedView = false,
	...props
}) {
	const [calendarState, setCalendarState] = useState({
		clear: false,
		selectionRange: [{ startDate: null, endDate: null, key: 'selection' }],
		inputValue: '',
	})
	const [showCalendar, setShowCalendar] = useState(false)

	// intially setting up the range if a range already exist
	useEffect(() => {
		if (selectedDateRange && selectedDateRange.length > 0) {
			setCalendarState({
				clear: false,
				selectionRange: selectedDateRange,
				inputValue: formatDateRange(selectedDateRange),
			})
		}
	}, [selectedDateRange])

	// setting static ranges options for calender
	const moreStaticRanges = [
		...defaultStaticRanges,
		{
			label: 'last year',
			range: () => ({
				startDate: startOfYear(addYears(new Date(), -1)),
				endDate: endOfYear(addYears(new Date(), -1)),
			}),
			isSelected(range) {
				const definedRange = this.range()
				return (
					isSameDay(range.startDate, definedRange.startDate) &&
					isSameDay(range.endDate, definedRange.endDate)
				)
			},
		},
	]

	// reset the input range to blank
	const clearSelectedDateRange = useCallback(() => {
		setCalendarState({
			clear: true,
			inputValue: '',
			selectionRange: [
				{
					startDate: null,
					endDate: null,
					key: 'selection',
				},
			],
		})
	}, [])

	// toggling the dropdown
	const showDateRange = () => {
		setShowCalendar((prev) => !prev)
	}

	const handleDateRangeSelection = (selection) => {
		setCalendarState({
			clearState: false,
			inputValue: formatDateRange([selection]),
			selectionRange: [selection],
		})
	}

	// passing the selected date range to parent component
	const applySelectedDateRange = () => {
		if (calendarState.clear) {
			setSelectedDateRange(calendarState.selectionRange)
			showDateRange()
		} else {
			setSelectedDateRange(calendarState.selectionRange)
			showDateRange()
		}
	}

	const dropdownContainerRef = useRef(null)
	const dateInputRef = useRef(null)

	// this hook handles dropdown menu on outside click or tab
	useClickOutSide(dateInputRef, dropdownContainerRef, showDateRange)

	return (
		<div className="daterange-picker" data-testid="date-range-picker">
			<div className="date-range-component">
				<div className="date-range-input" ref={dateInputRef}>
					<TextBoxButton
						{...testAttr('txt-date-range')}
						type="text"
						textBoxId="txt-date-range"
						textBoxLabel={label}
						defaultValue={calendarState?.inputValue}
						placeholder={placeholder}
						hasRightButton={true}
						hasError={hasError}
						errorMessage={errorMessage}
						buttonIcon={<DateRange />}
						isDisabled={isDisabled}
						onClickHandler={showDateRange}
						onChangeHandler={handleDateRangeSelection}
						onKeyPress={(e) => (e.key === 'Enter' ? showDateRange() : '')}
						textBoxArias={
							({ textBoxAriaLabel: ariaLabels.inputDateLabel },
							{ buttonAriaLabel: 'Show dage range picker' })
						}
					></TextBoxButton>
				</div>
			</div>

			{showCalendar && (
				<div
					data-testid="date-range-dropdown"
					className={`date-range-dropdown align-dropdown-${dropdownPlacement} ${
						monthsToShow === 1 ? 'single-calendar-view' : ''
					}`}
					ref={dropdownContainerRef}
				>
					<div className="date-range-dropdown-header">
						<ButtonLink
							buttonId="btnClose"
							aria-label="Close date range dropdown"
							className="button-link close-btn"
							data-testid="date-range-dropdown-close"
							onClick={showDateRange}
						>
							<CrossIcon fillColor="#037283" />
						</ButtonLink>
					</div>
					<div className="date-range-dropdown-body">
						{hasExpandedView ? (
							<DRP
								className={className}
								ranges={calendarState.selectionRange}
								staticRanges={moreStaticRanges}
								onChange={(item) => handleDateRangeSelection(item.selection)}
								inputRanges={[]}
								months={monthsToShow}
								direction={calendarDirection}
								showDateDisplay={false}
								weekdayDisplayFormat="EEEEE"
								monthDisplayFormat="LLLL yyyy"
								minDate={minDate}
								maxDate={maxDate}
								ariaLabels={ariaLabels}
								startDatePlaceholder="Select a start date"
								endDatePlaceholder="Select a end date"
								{...props}
							/>
						) : (
							<DR
								editableDateInputs={true}
								onChange={(item) => handleDateRangeSelection(item.selection)}
								moveRangeOnFirstSelection={false}
								ranges={calendarState.selectionRange}
								months={monthsToShow}
								direction={calendarDirection}
								startDatePlaceholder="Select a start date"
								endDatePlaceholder="Select a end date"
							/>
						)}
					</div>

					<div className="date-range-dropdown-footer">
						<ButtonLink
							buttonId="btnClear"
							type="button"
							className="button-link me-3"
							aria-label={ariaLabels.clearButon}
							onClick={clearSelectedDateRange}
						>
							Clear
						</ButtonLink>

						<Button
							buttonId="btnDateApply"
							type="button"
							variant="primary"
							size="large"
							{...testAttr('apply-button')}
							aria-label={ariaLabels.saveButton}
							onClickHandler={applySelectedDateRange}
						>
							Apply
						</Button>
					</div>
				</div>
			)}
		</div>
	)
}

DateRangePicker.displayName = 'DateRangePicker'
DateRangePicker.propTypes = {
	/** @type {Date} minimum start date for calendar */
	minDate: PropTypes.any,
	/** @type {Date} maximum start date for calendar */
	maxDate: PropTypes.any,
	isDisabled: PropTypes.bool,
	hasExpandedView: PropTypes.bool,
	hasError: PropTypes.bool,
	/** @type {string} css class names of the daterange picker */
	className: PropTypes.string,
	/** @type {string} placeholder of the daterange picker */
	placeholder: PropTypes.string.isRequired,
	label: PropTypes.string,
	errorMessage: PropTypes.string,
	/** @type {object} pre-selected daterange passed from the parent */
	selectedDateRange: PropTypes.arrayOf(PropTypes.object),
	setSelectedDateRange: PropTypes.func,
	/** @type {number} numberof munths to show in calender */
	monthsToShow: PropTypes.oneOf([1, 2]).isRequired,
	/** @type {string} direction of the calender */
	calendarDirection: PropTypes.oneOf(['horizontal', 'vertical']).isRequired,
	/** @type {object} aira labels for the accessibility */
	ariaLabels: PropTypes.shape({
		monthPicker: PropTypes.string,
		yearPicker: PropTypes.string,
		prevButton: PropTypes.string,
		nextButton: PropTypes.string,
		saveButton: PropTypes.string,
		clearButon: PropTypes.string,
		inputDateLabel: PropTypes.string,
	}).isRequired,
}

DateRangePicker.defaultProps = {
	label: 'Select a date(s)',
	placeholder: 'Last Updated',
	monthsToShow: 2,
	calendarDirection: 'horizontal',
	ariaLabels: {
		monthPicker: 'Month dropdown',
		yearPicker: 'Year dropdown',
		prevButton: 'Pervious month',
		nextButton: 'Next month',
		saveButton: 'Save selected date range',
		clearButon: 'Clear selected date range',
		inputDateLabel: 'Date range input',
	},
	isDisabled: false,
}
