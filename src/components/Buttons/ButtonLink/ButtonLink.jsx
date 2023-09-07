import PropTypes from 'prop-types'

import styles from './ButtonLink.module.css'

export default function ButtonLink({
	buttonId,
	children,
	variant,
	size,
	isDisabled,
	...props
}) {
	return (
		<a
			id={buttonId}
			className={`${styles.contanier} ${styles[variant]} ${styles[size]}`}
			disabled={isDisabled}
			{...props}
		>
			{children}
		</a>
	)
}

ButtonLink.propTypes = {
	buttonId: PropTypes.node.isRequired,
	isDisabled: PropTypes.bool,
	variant: PropTypes.oneOf([
		'danger',
		'black',
		'primary',
		'warning',
		'secondary',
		'success',
	]),
	size: PropTypes.oneOf(['small', 'medium', 'large', 'xlarge']),
	/** @type {node} content/body of Alert such as text, or an element, or object etc.*/
	children: PropTypes.node,
}

ButtonLink.defaultProps = {
	variant: 'primary',
	size: 'medium',
	isDisabled: false,
}
