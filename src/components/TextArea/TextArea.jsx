import { useState } from 'react'

import PropTypes from 'prop-types'

import { testAttr } from 'utils/test.utils'

import styles from './TextArea.module.css'

export default function TextArea({
	hasError,
	isDisabled,
	isRequired,
	textAreaId,
	textAreaName,
	textAreaPlaceholder,
	textAreaSubtext,
	textAreaLimit = 1000,
	errorMessage,
	onChangeHandler,
	...props
}) {
	const [count, setCount] = useState(0)

	return (
		<section>
			<div className={styles.container}>
				<label
					htmlFor={textAreaId}
					className={`${styles.labelContainer} ${
						hasError
							? `error-label`
							: isDisabled
							? `disabled_label`
							: styles.label
					}`}
				>
					<span>
						{textAreaName}
						{isRequired && !isDisabled && (
							<span className="required-field">*</span>
						)}
					</span>

					{textAreaSubtext && (
						<sub className={styles.subText}>{textAreaSubtext}</sub>
					)}
				</label>

				<textarea
					{...testAttr(textAreaId)}
					type="textarea"
					name={textAreaId}
					aria-multiline="true"
					id={textAreaId}
					placeholder={textAreaPlaceholder}
					className={`${styles.component} ${hasError ? `error-input` : ''}`}
					disabled={isDisabled}
					maxLength={textAreaLimit}
					required={isRequired}
					aria-invalid={hasError}
					onChange={(e) => {
						setCount(e.target.value.length)
						onChangeHandler(e.target.value, e.target.name)
					}}
					{...props}
				/>

				<div className={styles.footer}>
					<div className={styles.footerText}>
						{count}/{textAreaLimit}
					</div>
				</div>

				{hasError && <div className="error-label">{errorMessage}</div>}
			</div>
		</section>
	)
}

TextArea.propTypes = {
	hasError: PropTypes.bool,
	isDisabled: PropTypes.bool,
	isRequired: PropTypes.bool,
	errorMessage: PropTypes.string,
	textAreaId: PropTypes.string.isRequired,
	textAreaName: PropTypes.string.isRequired,
	textAreaPlaceholder: PropTypes.string,
	textAreaSubtext: PropTypes.string,
	textAreaLimit: PropTypes.number,
	onChangeHandler: PropTypes.func,
}
