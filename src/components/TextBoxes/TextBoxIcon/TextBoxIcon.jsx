import PropTypes from 'prop-types'

import { testAttr } from 'utils/test.utils'

import styles from './TextBoxIcon.module.css'

export default function TextBoxIcon({
	hasError,
	hasRightIcon,
	isDisabled,
	isRequired,
	labelPosition,
	inputType = 'text',
	icon,
	errorMessage,
	textBoxAriaLabel,
	textBoxId,
	textBoxLabel,
	textBoxPlaceholder,
	textBoxFooter,
	onChangeHandler,
	...props
}) {
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
								: styles.text
						} ${labelPosition && `${styles[labelPosition + `Position`]}`}`}
					>
						{textBoxLabel}
						{isRequired && !isDisabled && (
							<span className="required-field">*</span>
						)}
					</label>
				)}

				<div
					className={`${styles.component} ${
						hasRightIcon ? styles.rightPosition : ``
					}`}
				>
					{icon && (
						<span
							{...testAttr('textbox-icon')}
							className={`${styles.icon}
							${hasRightIcon ? styles.rightIcon : styles.leftIcon}
							${hasError ? styles.iconError : ''}`}
						>
							{icon}
						</span>
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
							onChangeHandler(e.target.value)
						}}
						className={`${styles.input} ${hasError ? `error-input` : ''}`}
						aria-label={textBoxAriaLabel}
						aria-invalid={hasError}
						{...props}
					/>
				</div>

				{(textBoxFooter || hasError) && (
					<div className="text-box__footer-container">
						{textBoxFooter && (
							<span
								className={`${
									isDisabled ? 'disabled-label' : styles.footerText
								}`}
							>
								{textBoxFooter}
							</span>
						)}

						{hasError && <span className="error-label">{errorMessage}</span>}
					</div>
				)}
			</div>
		</section>
	)
}

TextBoxIcon.propTypes = {
	hasError: PropTypes.bool,
	hasRightIcon: PropTypes.bool,
	isDisabled: PropTypes.bool,
	isRequired: PropTypes.bool,
	labelPosition: PropTypes.string,
	inputType: PropTypes.string,
	icon: PropTypes.element,
	errorMessage: PropTypes.string,
	textBoxAriaLabel: PropTypes.string,
	textBoxId: PropTypes.string,
	textBoxLabel: PropTypes.string,
	textBoxPlaceholder: PropTypes.string,
	textBoxFooter: PropTypes.string,
	onChangeHandler: PropTypes.func,
}
