/* eslint-disable testing-library/prefer-screen-queries */
/* eslint-disable testing-library/no-node-access */
import { render } from '@testing-library/react'
import { composeStories } from '@storybook/testing-react'

import * as stories from './Alert.stories'
import { userEvent } from '@storybook/testing-library'

const { DefaultTemplate } = composeStories(stories)

describe('<Alert />', () => {
	it('should render properly', () => {
		const { container } = render(<DefaultTemplate />)

		expect(container.firstChild).toBeTruthy()
	})

	it('should dismiss the component', () => {
		const { container, getByTestId, getByRole } = render(<DefaultTemplate />)

		expect(getByTestId('alertExample')).toBeVisible()
		userEvent.click(getByRole('button'))

		expect(container).toBeEmptyDOMElement()
	})
})
