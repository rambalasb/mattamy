import ButtonGroup from './ButtonGroup'

export default {
	title: 'Buttons/ButtonGroup',
	component: ButtonGroup,
	args: {
		size: 'small',
		buttonGroupId: 'btnBasic',
		variant: 'contained',
		color: 'primary',
		buttons: [
			{
				buttonId: 'btnCancel',
				label: 'Cancel',
				onClickHandler: () => console.log('hey there'),
			},
			{
				buttonId: 'btnClose',
				label: 'Close',
				onClickHandler: () => console.log('hello'),
			},
			{
				buttonId: 'btnSubmit',
				label: 'Submit',
				onClickHandler: () => console.log('hello world'),
			},
		],
	},
}

const Template = (args) => <ButtonGroup {...args}></ButtonGroup>

export const PrimaryTemplate = Template.bind({})

export const BlackTemplate = Template.bind({})
BlackTemplate.args = {
	color: 'black',
}

export const DangerTemplate = Template.bind({})
DangerTemplate.args = {
	color: 'danger',
}

export const WarningTemplate = Template.bind({})
WarningTemplate.args = {
	color: 'warning',
}

export const SecondaryTemplate = Template.bind({})
SecondaryTemplate.args = {
	color: 'secondary',
}

export const SuccessTemplate = Template.bind({})
SuccessTemplate.args = {
	color: 'success',
}

const buttons = [
	{
		buttonId: 'btnCancel',
		label: 'Cancel',
		onClickHandler: () => console.log('hey there'),
	},
	{
		buttonId: 'btnSubmit',
		label: 'Submit',
		onClickHandler: () => console.log('hello world'),
	},
]

export const TwoButtonsTemplate = (args) => (
	<ButtonGroup {...args} buttons={buttons}></ButtonGroup>
)
