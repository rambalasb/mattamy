import PropTypes from 'prop-types'

import LoadingScreen from 'components/LoadingScreen'

import styles from './SpinnerOverlay.module.css'

export default function SpinnerOverlay({
	isVisible,
	spinnerText,
	spinnerIcon,
}) {
	return (
		isVisible && (
			<div className={styles.spinnerOverlay}>
				<LoadingScreen loaderIcon={spinnerIcon} loadingText={spinnerText} />
			</div>
		)
	)
}

SpinnerOverlay.propTypes = {
	/** @type {boolean} to show or hide the spinner.*/
	isVisible: PropTypes.bool.isRequired,
	spinnerText: PropTypes.string,
	spinnerIcon: PropTypes.element,
}

SpinnerOverlay.defaultProps = {
	isVisible: true,
}
