import PropTypes from 'prop-types'

import { testAttr } from 'utils/test.utils'

import styles from './Badge.module.css'

export default function Badge({ badgeId, variant, children, isOutlined }) {
	return (
		<span
			{...testAttr(badgeId)}
			id={badgeId}
			className={`${isOutlined ? styles.outlinedContainer : styles.container} ${
				variant ? styles[variant] : ''
			}`}
		>
			{children}
		</span>
	)
}

Badge.propTypes = {
	/** @type {string} the id of the badge. */
	badgeId: PropTypes.string.isRequired,
	/** @type {boolean} used to determin if it's outlined. */
	isOutlined: PropTypes.bool,
	/** @type {node} content/body of Badge such as text, or an element, or object etc.*/
	children: PropTypes.node,
	/** @type {string} used to select which color the badge will be. */
	variant: PropTypes.oneOf(['danger', 'primary', 'success', 'warning', 'black'])
		.isRequired,
}
