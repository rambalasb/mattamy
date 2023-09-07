import Badge from '.'

export default {
	title: 'Badge',
	component: Badge,
	args: {
		children: 'Test',
		badgeId: 'badgeExample',
		variant: 'primary',
	},
}

const Template = ({ ...args }) => <Badge {...args} />

export const DefaultTemplate = Template.bind({})

export const SecondaryTemplate = Template.bind({})
SecondaryTemplate.args = {
	variant: 'secondary',
}

export const SuccessTemplate = Template.bind({})
SuccessTemplate.args = {
	variant: 'success',
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

export const OutlinedTemplate = Template.bind({})
OutlinedTemplate.args = {
	isOutlined: true,
}
