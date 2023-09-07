import { useRef, useState } from 'react'
import { useClickOutSide } from 'utils/customHooks/useClickOutSide'
import PropTypes from 'prop-types'

import ArrowDown from 'assets/svgs/ArrowDown'

import './styles.css'

export const ActionsDropdown = ({
	options,
	variant,
	size,
	handleSelection,
	ariaLabel,
	className,
	label,
	disabled,
}) => {
	const [toggleDropdown, setToggleDropdown] = useState(false)
	const handleShowHideDropdown = () => setToggleDropdown((prev) => !prev)
	const dropdownContainerRef = useRef(null)
	const dropdownButtonRef = useRef(null)
	// this hook handles dropdown menu on outside click or tab
	useClickOutSide(
		dropdownButtonRef,
		dropdownContainerRef,
		handleShowHideDropdown
	)
	const onClickAction = (action) => {
		handleSelection(action)
		handleShowHideDropdown()
	}
	return (
		<div className={`${className} action-dropdown`}>
			<button
				disabled={disabled}
				className={`action-dropdown-button text-fixed bold med-8 ${variant} ${size} ${
					disabled && 'disabled'
				}`}
				type="button"
				ref={dropdownButtonRef}
				onClick={handleShowHideDropdown}
				aria-expanded={toggleDropdown}
				aria-label={ariaLabel}
			>
				<span className="me-2">{label}</span>
				<ArrowDown width="12px" height="7.4px" />
			</button>
			{toggleDropdown && (
				<ul
					className="action-dropdown-list dropdown-menu"
					ref={dropdownContainerRef}
				>
					{options.map((option, i) => (
						<li key={i}>
							<button
								className="w-100 text-fixed regular med-8 text-break"
								onClick={() => onClickAction(option)}
								disabled={option.isDisabled}
							>
								{option.label}
							</button>
						</li>
					))}
				</ul>
			)}
		</div>
	)
}

ActionsDropdown.protoTypes = {
	variant: PropTypes.oneOf(['primary', 'secondary']).isRequired,
	size: PropTypes.oneOf(['medium', 'small']).isRequired,
	options: PropTypes.shape({
		label: PropTypes.string.isRequired,
		value: PropTypes.string.isRequired,
		isDisabled: PropTypes.bool,
	}),
	handleSelection: PropTypes.func.isRequired,
	label: PropTypes.string.isRequired,
	disabled: PropTypes.boolean,
}

ActionsDropdown.defaultProps = {
	variant: 'primary',
	size: 'medium',
	options: [{ label: 'No options', value: 'no-options', isDisabled: true }],
	ariaLabel: 'Actions Dropdown',
	label: 'Actions',
	disabled: false,
}

ActionsDropdown.displayName = 'ActionDropdown'
