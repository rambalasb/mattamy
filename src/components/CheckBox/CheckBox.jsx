import { useState } from 'react'
import PropTypes from 'prop-types'

import { testAttr } from 'utils/test.utils'

import './style.css'

export default function CheckBox({
	checkboxId,
	checkboxName,
	checkboxLabel,
	checkboxValue,
	isDisabled,
	hasError,
	onChangeHandler,
}) {
	const [isChecked, setIsChecked] = useState(false)
	const rootClass = 'check-box'

	return (
		<section className={rootClass}>
			<div className={`${rootClass}__container`}>
				<input
					{...testAttr(checkboxId)}
					id={checkboxId}
					name={checkboxName}
					checked={isChecked}
					type="checkbox"
					aria-checked={isChecked}
					className={hasError ? 'error-input' : `${rootClass}__checkbox`}
					disabled={isDisabled}
					onChange={(e) => {
						onChangeHandler(e.target.value)
						setIsChecked(!isChecked)
					}}
					aria-invalid={hasError}
					value={checkboxValue}
				/>
				<label
					htmlFor={checkboxId}
					className={`
						${
							hasError
								? 'error-label'
								: isDisabled
								? `${rootClass}__label-disabled`
								: `${rootClass}__label`
						}
					`}
				>
					{checkboxLabel}
				</label>
			</div>
		</section>
	)
}

CheckBox.propTypes = {
	isDisabled: PropTypes.bool,
	hasError: PropTypes.bool,
	checkboxId: PropTypes.string.isRequired,
	checkboxLabel: PropTypes.string.isRequired,
	checkboxName: PropTypes.string.isRequired,
	onChangeHandler: PropTypes.func,
}
