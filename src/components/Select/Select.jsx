import { useCallback, useMemo, useRef, useState } from 'react'
import PropTypes from 'prop-types'

import { testAttr } from 'utils/test.utils'

import ArrowDown from 'assets/svgs/ArrowDown'
import CloseIcon from 'assets/svgs/CloseIcon'

import styles from './Select.module.css'

export default function Select({
	hasError = false,
	isDisabled = false,
	isMulti = false,
	options,
	placeholder,
	selectId,
	ariaLabel,
	onChangeHandler,
}) {
	const [showOptions, setShowOptions] = useState(false)
	const [selectedOption, setSelectedOption] = useState(isMulti ? [] : null)

	const optionBoxRef = useRef()
	const buttonRef = useRef()
	const timeOutId = useRef()

	const onBlurHandler = useCallback(() => {
		timeOutId.current = setTimeout(() => {
			setShowOptions(false)
		})
	}, [])

	const onFocusHandler = useCallback(() => {
		clearTimeout(timeOutId.current)
	}, [])

	const removeSelectedOption = useCallback(
		(option) => {
			return selectedOption.filter((o) => o.value !== option.value)
		},
		[selectedOption]
	)

	const onTagRemove = useCallback(
		(option) => {
			let newValue = removeSelectedOption(option)
			setSelectedOption(newValue)
			onChangeHandler(newValue)
		},
		[onChangeHandler, removeSelectedOption]
	)

	const getDisplay = useMemo(() => {
		if (!selectedOption || selectedOption.length === 0) {
			return placeholder
		}

		if (isMulti) {
			return (
				<div className={styles.tags}>
					{selectedOption.map((option) => (
						<div key={option.value} className={styles.tagItem}>
							{option.label}

							<span
								{...testAttr(`${option.label}-close`)}
								onClick={() => onTagRemove(option)}
							>
								<CloseIcon />
							</span>
						</div>
					))}
				</div>
			)
		} else {
			return selectedOption.label
		}
	}, [isMulti, onTagRemove, placeholder, selectedOption])

	const applySelectedOption = useCallback(
		(option) => {
			let newValue

			if (isMulti) {
				if (selectedOption.findIndex((o) => o.value === option.value) >= 0) {
					newValue = removeSelectedOption(option)
				} else {
					newValue = [...selectedOption, option]
				}
			} else {
				newValue = option
			}

			setSelectedOption(newValue)
			setShowOptions(!showOptions)
			onChangeHandler(newValue)
		},
		[
			isMulti,
			onChangeHandler,
			removeSelectedOption,
			selectedOption,
			showOptions,
		]
	)

	const isSelected = useCallback(
		(option) => {
			if (isMulti) {
				return selectedOption.filter((o) => o.value === option.value).length > 0
			}

			if (!selectedOption) {
				return false
			}

			return selectedOption.value === option.value
		},
		[isMulti, selectedOption]
	)

	const buttonStyle = `
		${styles.button}
		${showOptions ? styles.buttonOpen : ''}
		${selectedOption !== null ? styles.buttonActive : ''}
		${hasError ? 'error-input' : ''}`

	const chevronStyle = `
		${styles.chevron} 
		${showOptions ? styles.chevronOpen : ''}
		${hasError ? styles.chevronError : ''}`

	return (
		<div
			className={styles.container}
			onBlur={onBlurHandler}
			onFocus={onFocusHandler}
		>
			<button
				{...testAttr(`${selectId}_button`)}
				aria-haspopup="listbox"
				aria-expanded={showOptions}
				aria-label={
					ariaLabel
						? `${ariaLabel} ${
								selectedOption ? selectedOption.label : placeholder
						  }`
						: ''
				}
				aria-labelledby={
					selectId !== 'dropdown' ? `${selectId} ${selectId}_button` : ''
				}
				id={styles.button}
				type="button"
				onClick={() => setShowOptions(!showOptions)}
				className={buttonStyle}
				ref={buttonRef}
				disabled={isDisabled}
			>
				{getDisplay}

				<span className={chevronStyle}>
					<ArrowDown fillColor="#fff" />
				</span>
			</button>
			{showOptions && (
				<ul
					tabIndex={0}
					id={styles.list}
					role="listbox"
					aria-labelledby={selectId}
					aria-activedescendant={
						selectedOption !== null
							? `${selectId}_${selectedOption?.value}`
							: ''
					}
					ref={optionBoxRef}
					className={styles.option}
				>
					{options.map((option) => (
						<li
							{...testAttr(`${selectId}_${option?.value}`)}
							tabIndex={0}
							onClick={() => applySelectedOption(option)}
							onKeyDown={(e) => {
								if (e.key === 'Enter') applySelectedOption(option)
							}}
							key={option?.value}
							id={`${selectId}_${option?.value}`}
							role="option"
							aria-selected={isSelected(option)}
							className={`
								${styles.item} 
								${isSelected(option) ? styles.itemSelected : ''}
							`}
						>
							{option.label}
						</li>
					))}
				</ul>
			)}
		</div>
	)
}

Select.propTypes = {
	hasError: PropTypes.bool,
	isDisabled: PropTypes.bool,
	isMulti: PropTypes.bool,
	placeholder: PropTypes.string,
	selectId: PropTypes.string.isRequired,
	ariaLabel: PropTypes.string,
	options: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
	onChangeHandler: PropTypes.func,
}
