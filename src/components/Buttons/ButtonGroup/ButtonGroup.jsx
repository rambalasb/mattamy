import PropTypes from 'prop-types'

import Button from 'components/Buttons/Button'

import styles from './ButtonGroup.module.css'

export default function ButtonGroup({
	buttonGroupId,
	variant = 'outlined',
	size,
	color,
	orientation = 'horizontal',
	buttons,
}) {
	return (
		<div
			id={buttonGroupId}
			className={`
                ${styles.container}
                ${styles[orientation]}
                ${color ? styles[color] : ''}
                ${variant ? styles[variant] : ''}
                ${size ? styles[size] : ''}
            `}
		>
			{buttons.map((button, index) => {
				return (
					<Button
						variant="none"
						key={button.id + '_' + index}
						buttonId={button.buttonId}
						isDisabled={button.isDisabled}
						onClickHandler={button.onClickHandler}
					>
						{button.label}
					</Button>
				)
			})}
		</div>
	)
}

ButtonGroup.propTypes = {
	buttonGroupId: PropTypes.string.isRequired,
	color: PropTypes.oneOf([
		'danger',
		'black',
		'primary',
		'warning',
		'secondary',
		'success',
	]),
	orientation: PropTypes.oneOf(['horizontal', 'vertical']),
	variant: PropTypes.oneOf(['contained', 'outlined']),
	size: PropTypes.oneOf(['small', 'medium', 'large', 'xlarge']),
	buttons: PropTypes.arrayOf(PropTypes.shape({ ...Button.propTypes })),
}
