import TextBoxIcon from '.'

import { mockProps } from 'components/TextBoxes/TextBoxes.mock'

import MailboxIcon from 'assets/svgs/MailboxIcon'

export default {
	title: 'TextBoxes/TextBoxIcon',
	component: TextBoxIcon,
	args: mockProps,
}

export const BasicTemplate = (args) => {
	return (
		<TextBoxIcon
			{...args}
			icon={<MailboxIcon fillColor={'#f4a261'} />}
		></TextBoxIcon>
	)
}

export const RightIconTemplate = (args) => {
	return (
		<TextBoxIcon
			{...args}
			hasRightIcon={true}
			icon={<MailboxIcon fillColor={'#f4a261'} />}
		></TextBoxIcon>
	)
}

export const ErrorTemplate = (args) => {
	return (
		<TextBoxIcon
			{...args}
			hasError={true}
			icon={<MailboxIcon fillColor={'#f4a261'} />}
			errorMessage="Please enter a username"
		></TextBoxIcon>
	)
}

export const DisabledTemplate = (args) => {
	return (
		<TextBoxIcon
			{...args}
			isDisabled={true}
			hasRightIcon={true}
			icon={<MailboxIcon fillColor={'#f4a261'} />}
		></TextBoxIcon>
	)
}
