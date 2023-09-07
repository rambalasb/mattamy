import { useState } from 'react'
import { Switch } from './Switch'

export default {
	title: 'Switch',
	component: Switch,
	args: {
		switchId: 'toggleSwitch',
	},
}

const Template = (args) => {
	const [mockToggled, setMockToggled] = useState(false)

	return (
		<Switch
			{...args}
			isToggled={mockToggled}
			onToggleHandler={() => setMockToggled(!mockToggled)}
		></Switch>
	)
}

export const DefaultTemplate = Template.bind({})

export const LabelTemplate = Template.bind({})
LabelTemplate.args = {
	switchLabel: 'LightBulb',
}

export const DisabledTemplete = Template.bind({})
DisabledTemplete.args = {
	isDisabled: true,
	switchLabel: 'LightBulb',
}
