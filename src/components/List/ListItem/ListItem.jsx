import PropTypes from 'prop-types'

import { testAttr } from 'utils/test.utils'

import styles from './ListItem.module.css'

export default function ListItem({ hasError, children, listItemId }) {
	return (
		<li {...testAttr(listItemId)} id={listItemId} className={styles.container}>
			{children}
		</li>
	)
}

ListItem.propTypes = {
	hasError: PropTypes.bool,
	listItemId: PropTypes.node.isRequired,
	/** @type {node} content/body of Alert such as text, or an element, or object etc.*/
	children: PropTypes.node,
}
