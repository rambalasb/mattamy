import StatusIndicator from '.'

export default {
	title: 'StatusIndicator',
	component: StatusIndicator,
	args: {
		statusId: 'statusExample',
		status: 'SUBMITTED',
	},
}

export const DefaultTemplate = (args) => <StatusIndicator {...args} />
