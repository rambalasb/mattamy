import PropTypes from 'prop-types'
import styles from './Card.module.css'

export default function Card({ children, cardHeader, cardId, ...props }) {
	return (
		<div id={cardId} className={styles.container} {...props}>
			{cardHeader && <h1 className={styles.header}>{cardHeader}</h1>}

			<div className={styles.body}>{children}</div>
		</div>
	)
}

Card.propTypes = {
	cardId: PropTypes.node.isRequired,
	cardHeader: PropTypes.string,
	/** @type {node} content/body of Alert such as text, or an element, or object etc.*/
	children: PropTypes.node,
}
