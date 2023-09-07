import PropTypes from 'prop-types'

import { STATUS_TYPES } from './status.constants'

import styles from './StatusIndicator.module.css'

export default function StatusIndicator({ statusId, status, statusMessage }) {
	return (
		<>
			{status && (
				<div
					id={statusId}
					className={`${styles.container} ${styles[status.toLowerCase()]}`}
				>
					<span className={styles.statusLabel}>
						{statusMessage ? statusMessage : STATUS_TYPES[status]}
					</span>
				</div>
			)}
		</>
	)
}

StatusIndicator.propTypes = {
	/** @type {node} the id of statusIndicator componen.*/
	statusId: PropTypes.node.isRequired,
	/** @type {string} status to be displayed.*/
	status: PropTypes.string.isRequired,
	/** @type {string} the message to be displayed to the user.*/
	statusMessage: PropTypes.string,
}
