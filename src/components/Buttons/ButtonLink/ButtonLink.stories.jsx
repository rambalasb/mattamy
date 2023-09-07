import ButtonLink from '.'

export default {
	title: 'Buttons/ButtonLink',
	component: ButtonLink,
	args: {
		buttonId: 'btnBasic',
		href: 'https://openai.com/blog/chatgpt',
	},
}

const Template = (args) => <ButtonLink {...args}>Click me!</ButtonLink>

export const PrimaryTemplate = Template.bind({})

export const BlackTemplate = Template.bind({})
BlackTemplate.args = {
	variant: 'black',
}

export const DangerTemplate = Template.bind({})
DangerTemplate.args = {
	variant: 'danger',
}

export const WarningTemplate = Template.bind({})
WarningTemplate.args = {
	variant: 'warning',
}

export const SecondaryTemplate = Template.bind({})
SecondaryTemplate.args = {
	variant: 'secondary',
}

export const SuccessTemplate = Template.bind({})
SuccessTemplate.args = {
	variant: 'success',
}
