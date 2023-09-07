import SpinnerOverlay from '.'

import LoadingIcon from 'assets/svgs/LoadingIcon'

export default {
	title: 'SpinnerOverlay',
	component: SpinnerOverlay,
	args: {
		spinnerIcon: <LoadingIcon fillColor="#e76f51" />,
		spinnerText: 'Please wait while we load the page',
	},
}

export const DefaultTemplate = (args) => (
	<SpinnerOverlay {...args}></SpinnerOverlay>
)
