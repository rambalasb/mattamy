import TextBox from '.'

import { mockProps } from 'components/TextBoxes/TextBoxes.mock'

export default {
	title: 'TextBoxes/TextBox',
	component: TextBox,
	args: mockProps,
}

export const BasicTemplate = (args) => {
	return <TextBox {...args}></TextBox>
}

export const ErrorTemplate = (args) => {
	return <TextBox {...args}></TextBox>
}

ErrorTemplate.args = {
	hasError: true,
	errorMessage: `Don't Panic`,
}

export const FooterTemplate = (args) => {
	return <TextBox {...args}></TextBox>
}

FooterTemplate.args = {
	textBoxFooter: 'I am a footer for a textbox',
}

export const DisabledTemplate = (args) => {
	return <TextBox {...args}></TextBox>
}

DisabledTemplate.args = {
	isDisabled: true,
}
