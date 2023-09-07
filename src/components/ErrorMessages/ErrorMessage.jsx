import PropTypes from 'prop-types'

import Warningicon from 'assets/svgs/WarningIcon'
import styles from './ErrorMessage.module.css'

export default function ErrorMessage({ messages }) {
	return (
		<div className={styles.container}>
			<Warningicon fillColor="#e35053" />

			<ul className={styles.errorList}>
				{messages.map((errorMessage, index) => {
					return <li key={index}>{errorMessage}</li>
				})}
			</ul>
		</div>
	)
}

ErrorMessage.propTypes = {
	/** @type {string} error message.*/
	messages: PropTypes.array.isRequired,
}

ErrorMessage.defaultProps = {
	errorMessage: 'Oppies!',
}
