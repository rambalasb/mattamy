import PropTypes from 'prop-types'

import Button from 'components/Buttons/Button'

import CloseIcon from 'assets/svgs/CloseIcon'

import styles from './Modal.module.css'
import { testAttr } from 'utils/test.utils'

export default function Modal({
	isOpen,
	setIsOpen,
	modalHeader,
	modalId,
	childern,
	ariaModalLabels,
	modalMainBtn,
	modalSecondaryBtn,
	...props
}) {
	return (
		<>
			{isOpen && (
				<div {...testAttr(modalId)} className={styles.overlay}>
					<div className={styles.container}>
						{modalHeader && (
							<div className={styles.header}>
								{modalHeader}

								<span
									aria-label="close-icon"
									onClick={() => setIsOpen(false)}
									className={styles.close}
								>
									<CloseIcon />
								</span>
							</div>
						)}

						<div className={styles.body}>{childern}</div>

						{(modalMainBtn || modalSecondaryBtn) && (
							<div
								className={
									modalSecondaryBtn ? styles.footerTwoBtn : styles.footer
								}
							>
								{modalSecondaryBtn && (
									<Button
										buttonId={modalSecondaryBtn.id}
										variant={modalSecondaryBtn.variant}
										onClickHandler={() => modalSecondaryBtn.onClickHandler()}
									>
										{modalSecondaryBtn.text}
									</Button>
								)}

								<Button
									buttonId={modalMainBtn.id}
									variant={modalMainBtn.variant}
									onClickHandler={() => modalMainBtn.onClickHandler()}
								>
									{modalMainBtn.text}
								</Button>
							</div>
						)}
					</div>
				</div>
			)}
		</>
	)
}

Modal.propTypes = {
	isOpen: PropTypes.bool,
	modalHeader: PropTypes.string,
	modalId: PropTypes.node.isRequired,
	childern: PropTypes.node,
	modalMainBtn: PropTypes.shape({
		id: PropTypes.node,
		text: PropTypes.string.isRequired,
		size: PropTypes.string,
		variant: PropTypes.string,
		onClickHandler: PropTypes.func,
	}),
	modalSecondaryBtn: PropTypes.shape({
		id: PropTypes.node,
		text: PropTypes.string,
		size: PropTypes.string,
		variant: PropTypes.string,
		onClickHandler: PropTypes.func,
	}),
	setIsOpen: PropTypes.func,
}
