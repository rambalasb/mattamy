import { useState } from 'react'
import PropTypes from 'prop-types'

import { testAttr } from 'utils/test.utils'

import styles from './TextBox.module.css'

export default function TextBox({
	isRequired,
	isDisabled,
	hasError,
	hasCount,
	onChangeHandler,
	errorMessage,
	inputType,
	moreClasses,
	position,
	textBoxId,
	textBoxLabel,
	textBoxPlaceholder,
	textBoxFooter,
	textBoxLimit,
	textBoxAriaLabel,
	...props
}) {
	const [count, setCount] = useState(0)

	return (
		<section>
			<div className={styles.container}>
				{textBoxLabel && (
					<label
						htmlFor={textBoxId}
						className={`${
							hasError
								? `error-label`
								: isDisabled
								? 'disabled-label'
								: styles.textboxLabel
						} ${position && `${styles[position + `Position`]}`}`}
					>
						{textBoxLabel}
						{isRequired && !isDisabled && (
							<span className="required-field">*</span>
						)}
					</label>
				)}

				<input
					{...testAttr(textBoxId)}
					type={inputType}
					id={textBoxId}
					name={textBoxId}
					placeholder={textBoxPlaceholder}
					disabled={isDisabled}
					required={isRequired}
					aria-required={isRequired}
					onChange={(e) => {
						setCount(e.target.value.length)
						onChangeHandler(e.target.value)
					}}
					className={`${hasError ? `error-input` : ''}`}
					maxLength={textBoxLimit}
					aria-label={textBoxAriaLabel}
					aria-invalid={hasError}
					{...props}
				/>

				{(hasCount || textBoxFooter || hasError) && (
					<div className={styles.footerContainer}>
						{textBoxFooter && (
							<div
								className={`${
									isDisabled ? 'disabled-label' : styles.footerText
								}`}
							>
								{textBoxFooter}
							</div>
						)}

						{hasError && (
							<div className={styles.errorLabel}>{errorMessage}</div>
						)}

						{hasCount && (
							<div
								className={`${
									hasError
										? 'error-label'
										: isDisabled
										? 'disabled-label'
										: 'text-box_counter'
								}`}
							>
								{count}/{textBoxLimit}
							</div>
						)}
					</div>
				)}
			</div>
		</section>
	)
}

TextBox.propTypes = {
	hasCount: PropTypes.bool,
	hasError: PropTypes.bool,
	isRequired: PropTypes.bool,
	isDisabled: PropTypes.bool,
	onChangeHandler: PropTypes.func,
	errorMessage: PropTypes.string,
	inputType: PropTypes.string,
	moreClasses: PropTypes.string,
	position: PropTypes.string,
	textBoxLimit: PropTypes.number,
	textBoxId: PropTypes.node.isRequired,
	textBoxLabel: PropTypes.string,
	textBoxPlaceholder: PropTypes.string,
	textBoxFooter: PropTypes.string,
	textBoxAriaLabel: PropTypes.string,
}

TextBox.defaultProps = {
	textBoxPlaceholder: '',
	textBoxFooter: '',
	isRequired: false,
	isDisabled: false,
	errorMessage: '',
	textBoxLimit: 256,
	inputType: 'text',
}
