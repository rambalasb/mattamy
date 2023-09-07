import TextBoxButton from '.'

import { mockProps } from 'components/TextBoxes/TextBoxes.mock'

import MailboxIcon from 'assets/svgs/MailboxIcon'

export default {
	title: 'TextBoxes/TextBoxButton',
	component: TextBoxButton,
	args: mockProps,
}

export const BasicTemplate = (args) => {
	return (
		<TextBoxButton
			{...args}
			buttonIcon={<MailboxIcon fillColor="#2a9d8f" />}
			hasRightButton={true}
			textBoxArias={({ textBoxAriaLabel: 'foo' }, { buttonAriaLabel: 'baa' })}
		></TextBoxButton>
	)
}

export const LeftButtonTemplate = (args) => {
	return (
		<TextBoxButton
			{...args}
			buttonIcon={<MailboxIcon fillColor="#2a9d8f" />}
			hasRightButton={false}
			hasLeftButton={true}
			textBoxArias={({ textBoxAriaLabel: 'foo' }, { buttonAriaLabel: 'baa' })}
		></TextBoxButton>
	)
}

export const TextButtonTemplate = (args) => {
	return (
		<TextBoxButton
			{...args}
			hasRightButton={false}
			hasLeftButton={true}
			textBoxArias={({ textBoxAriaLabel: 'foo' }, { buttonAriaLabel: 'baa' })}
			buttonText="Submit"
		></TextBoxButton>
	)
}

export const DisabledTemplate = (args) => {
	return (
		<TextBoxButton
			{...args}
			buttonIcon={<MailboxIcon fillColor="#2a9d8f" />}
			hasRightButton={true}
			isDisabled={true}
			textBoxArias={({ textBoxAriaLabel: 'foo' }, { buttonAriaLabel: 'baa' })}
		></TextBoxButton>
	)
}

export const ErrorTemplate = (args) => {
	return (
		<TextBoxButton
			{...args}
			buttonIcon={<MailboxIcon fillColor="#2a9d8f" />}
			hasRightButton={true}
			hasError={true}
			textBoxArias={({ textBoxAriaLabel: 'foo' }, { buttonAriaLabel: 'baa' })}
			errorMessage="Please Enter a username"
			textBoxFooter=""
		></TextBoxButton>
	)
}
