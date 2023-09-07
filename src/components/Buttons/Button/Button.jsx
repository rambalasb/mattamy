import PropTypes from 'prop-types'

import { testAttr } from 'utils/test.utils'

import styles from './Button.module.css'

export default function Button({
	buttonId,
	variant,
	size,
	isDisabled,
	isOutlined,
	children,
	onClickHandler,
	...props
}) {
	return (
		<button
			id={buttonId}
			{...testAttr(buttonId)}
			className={`${styles.container} ${isOutlined ? styles.outlined : ''} 
			${variant ? styles[variant] : ''} ${size ? styles[size] : ''} `}
			onClick={onClickHandler}
			disabled={isDisabled}
			{...props}
		>
			{children}
		</button>
	)
}

Button.propTypes = {
	buttonId: PropTypes.string.isRequired,
	variant: PropTypes.oneOf([
		'none',
		'danger',
		'black',
		'primary',
		'warning',
		'secondary',
		'success',
	]),
	size: PropTypes.oneOf(['small', 'medium', 'large', 'xlarge']),
	isDisabled: PropTypes.bool,
	isOutlined: PropTypes.bool,
	onClickHandler: PropTypes.func,
	/** @type {node} content/body of Alert such as text, or an element, or object etc.*/
	children: PropTypes.node,
}
