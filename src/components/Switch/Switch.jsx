import PropTypes from 'prop-types'

import styles from './Switch.module.css'

export const Switch = ({
	switchId,
	switchLabel,
	color = 'primary',
	isDisabled,
	isToggled,
	onToggleHandler,
}) => {
	return (
		<>
			<div className={`${styles.container}`}>
				{switchLabel && (
					<label id="switchLabel" htmlFor={switchId}>
						{switchLabel}
					</label>
				)}

				<label className={`${styles.component}`}>
					<input
						type="checkbox"
						id={switchId}
						className={styles.toggleCheckbox}
						checked={isToggled}
						onChange={onToggleHandler}
						disabled={isDisabled}
					/>
					<span
						arial-label="toggle-button"
						className={`${styles.toggleBtn} ${color ? styles[color] : ''}`}
						disabled={isDisabled}
					/>
				</label>
			</div>
		</>
	)
}

Switch.propTypes = {
	/** @type {string} Label of the switch button.*/
	switchLabel: PropTypes.string,
	/** @type {string} Id of the switch button.*/
	switchId: PropTypes.string.isRequired,
	/** @type {bool} If the switch button is disable.*/
	isDisabled: PropTypes.bool,
	/** @type {bool} Switch button is checked state.*/
	isToggled: PropTypes.bool,
	/** @type {Function} Switch button on change.*/
	onToggleHandler: PropTypes.func,
	/** @type {string} color options.*/
	color: PropTypes.oneOf([
		'danger',
		'black',
		'primary',
		'warning',
		'secondary',
		'success',
	]),
}
