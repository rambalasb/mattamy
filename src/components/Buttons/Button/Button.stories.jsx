import Button from '.'
import EditIcon from 'assets/svgs/EditIcon'

export default {
	title: 'Buttons/Button',
	component: Button,
	args: {
		size: 'medium',
		buttonId: 'btnBasic',
	},
}

const Template = (args) => <Button {...args}>Click me!</Button>

export const PrimaryTemplate = Template.bind({})
PrimaryTemplate.args = {
	variant: 'primary',
}

export const SecondaryTemplate = Template.bind({})
SecondaryTemplate.args = {
	variant: 'secondary',
}

export const DangerTemplate = Template.bind({})
DangerTemplate.args = {
	variant: 'danger',
}

export const WarningTemplate = Template.bind({})
WarningTemplate.args = {
	variant: 'warning',
}

export const BlackTemplate = Template.bind({})
BlackTemplate.args = {
	variant: 'black',
}

export const SuccessTemplate = Template.bind({})
SuccessTemplate.args = {
	variant: 'success',
}

export const DisabledTemplate = Template.bind({})
DisabledTemplate.args = {
	isDisabled: true,
}

export const OutlinedTemplate = Template.bind({})
OutlinedTemplate.args = {
	isOutlined: true,
	variant: 'primary',
}

export const BtnIconTemplate = (args) => {
	return (
		<Button {...args} variant="primary">
			Click Me <EditIcon fillColor="#fff" />
		</Button>
	)
}
