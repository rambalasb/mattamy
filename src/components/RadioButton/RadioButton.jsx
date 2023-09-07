import PropTypes from 'prop-types'

import { testAttr } from 'utils/test.utils'

import styles from './RadioButton.module.css'

export default function RadioButton({
	hasError = false,
	isDisabled = false,
	radioButtonId,
	radioButtonName,
	radioButtonLabel,
	setSelectedValue,
	selectedValue,
	onChangeHandler,
	...props
}) {
	const rootClass = 'radio-button'

	const applySlectedRadio = (selected) => {
		setSelectedValue(selected)
	}

	return (
		<section className={rootClass}>
			<div className={styles.container}>
				<label
					htmlFor={radioButtonId}
					className={styles.label}
					disabled={isDisabled}
				>
					<input
						{...testAttr(radioButtonId)}
						type="radio"
						id={radioButtonId}
						name={radioButtonName}
						value={radioButtonLabel}
						className={`${styles.radiobutton} ${
							hasError ? styles.errorInput : ''
						}`}
						onChange={(e) => applySlectedRadio(e.target.value)}
						disabled={isDisabled}
						{...props}
					/>

					<p
						className={`${styles.text} ${
							hasError ? `error-label` : isDisabled ? styles.textDisabled : ''
						}`}
					>
						{radioButtonLabel}
					</p>
				</label>
			</div>
		</section>
	)
}

RadioButton.propTypes = {
	hasError: PropTypes.bool,
	isDisabled: PropTypes.bool,
	radioButtonId: PropTypes.string.isRequired,
	radioButtonName: PropTypes.string.isRequired,
	radioButtonLabel: PropTypes.string.isRequired,
	selectedValue: PropTypes.string,
	setSelectedValue: PropTypes.func,
	onChangeHandler: PropTypes.func,
}
