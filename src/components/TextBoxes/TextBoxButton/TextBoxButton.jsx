import PropTypes from 'prop-types'

import { testAttr } from 'utils/test.utils'

import styles from './TextBoxButton.module.css'

export default function TextBoxButton({
	hasError,
	hasLeftButton,
	hasRightButton,
	isDisabled,
	isRequired,
	labelPosition,
	inputType = 'text',
	buttonText,
	buttonIcon,
	errorMessage,
	textBoxId,
	textBoxLabel,
	textBoxPlaceholder,
	textBoxFooter,
	textBoxArias,
	onChangeHandler,
	onClickHandler,
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
						} ${labelPosition && `${labelPosition}_position`}`}
					>
						{textBoxLabel}
						{isRequired && !isDisabled && (
							<span className="required-field">*</span>
						)}
					</label>
				)}

				<div
					className={`${styles.component} ${
						hasRightButton && !hasLeftButton ? styles.rightPosition : ``
					}`}
				>
					{(buttonText || buttonIcon) && (
						<button
							{...testAttr('textbox-button')}
							className={`${styles.button} ${
								hasRightButton && !hasLeftButton
									? styles.rightButton
									: styles.leftButton
							} ${hasError ? styles.buttonError : ''}`}
							onClick={onClickHandler}
							disabled={isDisabled}
							aria-label={textBoxArias.buttonAriaLabel}
						>
							{buttonText ? buttonText : buttonIcon}
						</button>
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
						aria-label={textBoxArias.textBoxAriaLabel}
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

TextBoxButton.propTypes = {
	hasError: PropTypes.bool,
	hasLeftButton: PropTypes.bool,
	hasRightButton: PropTypes.bool,
	isDisabled: PropTypes.bool,
	isRequired: PropTypes.bool,
	labelPosition: PropTypes.string,
	inputType: PropTypes.string,
	buttonText: PropTypes.string,
	buttonIcon: PropTypes.element,
	errorMessage: PropTypes.string,
	textBoxId: PropTypes.string,
	textBoxLabel: PropTypes.string,
	textBoxPlaceholder: PropTypes.string,
	textBoxFooter: PropTypes.string,
	textBoxArias: PropTypes.shape({
		textBoxAriaLabel: PropTypes.string,
		buttonAriaLabel: PropTypes.string.isRequired,
	}),
	onChangeHandler: PropTypes.func,
	onClickHandler: PropTypes.func,
}
