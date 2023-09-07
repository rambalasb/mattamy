import { useState } from 'react'
import PropTypes from 'prop-types'
import ArrowDown from 'assets/svgs/ArrowDown'
import './styles.css'

export const Accordion = ({ header, children, accordClass, isOpen }) => {
	const [isAccordionOpen, setIsAccordionOpen] = useState(isOpen)
	return (
		<div className={`${accordClass} accordion`}>
			<button
				className="accordion-header"
				type="button"
				onClick={() => setIsAccordionOpen((prev) => !prev)}
			>
				<span className="color-medium-grey-3 text-fixed med-8 mb-0">
					{header}
				</span>
				<ArrowDown
					width="12px"
					height="7.4px"
					className={isAccordionOpen ? 'accordion-rotate-icon' : null}
				/>
			</button>
			{isAccordionOpen && <div className="accordion-body">{children}</div>}
		</div>
	)
}

Accordion.propTypes = {
	/** @type {string} Heading of the accordion.*/
	header: PropTypes.string.isRequired,
	/** @type {string} css class names.*/
	accordClass: PropTypes.string,
	/** @type {stringORNumberORelement} children of the Accordion.*/
	children: PropTypes.oneOfType([
		PropTypes.element,
		PropTypes.node,
		PropTypes.string,
		PropTypes.number,
	]).isRequired,
	/** @type {Boolean} Keep accordion open or close.*/
	isOpen: PropTypes.bool,
}

Accordion.defaultProps = {
	isOpen: true,
	header: 'HI LOOK AT ME',
	children: 'Test content',
}
