import { Accordion } from '.'

export default {
	title: 'Accordion',
	component: Accordion,
}

const Template = ({ children, ...args }) => (
	<Accordion {...args}>{children}</Accordion>
)

export const SingleAccordion = Template.bind({})

SingleAccordion.args = {
	isOpen: false,
	accordClass: 'any-class',
	header: 'Header Test',
	children: 'Test',
}
