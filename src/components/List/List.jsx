import PropTypes from 'prop-types'

import { testAttr } from 'utils/test.utils'

import styles from './List.module.css'

export default function List({ listId, children }) {
	return (
		<ul {...testAttr(listId)} id={listId} className={styles.container}>
			{children}
		</ul>
	)
}

List.propTypes = {
	listId: PropTypes.string.isRequired,
	/** @type {node} content/body of Alert such as text, or an element, or object etc.*/
	children: PropTypes.node,
}
