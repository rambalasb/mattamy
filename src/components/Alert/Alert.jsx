import PropTypes from 'prop-types'

import Button from 'components/Buttons/Button/Button'
import CrossIcon from 'assets/svgs/CrossIcon'

import { testAttr } from 'utils/test.utils'

import styles from './Alert.module.css'

export default function Alert({
	alertId,
	type = 'error',
	variant,
	isOpen,
	isDissmissable = true,
	children,
	onClickHandler,
}) {
	return (
		<>
			{isOpen && (
				<div
					{...testAttr(alertId)}
					className={`${styles.container} ${styles[type]} ${styles[variant]}`}
					role="alert"
					aria-live="assertive"
				>
					{children}

					{isDissmissable && (
						<Button
							buttonId="btnCloseAlert"
							variant="none"
							aria-label="Dismiss alert"
							children={<CrossIcon />}
							onClick={onClickHandler}
						/>
					)}
				</div>
			)}
		</>
	)
}

Alert.propTypes = {
	alertId: PropTypes.node.isRequired,
	/** @type {string} type of the alert ex: 'error' or 'success'.*/
	type: PropTypes.oneOf(['error', 'info', 'success', 'warning']).isRequired,
	/** @type {string} variant of the alert ex: 'outlined'.*/
	variant: PropTypes.oneOf(['filled', 'outlined']),
	/** @type {boolean} to show or hide the alert.*/
	isOpen: PropTypes.bool,
	/** @type {boolean} to allow the user to close the alert.*/
	isDissmissable: PropTypes.bool,
	/** @type {node} content/body of Alert such as text, or an element, or object etc.*/
	children: PropTypes.node,
	/** @type {element} function to close alert.*/
	onClickHandler: PropTypes.func,
}
