/* eslint-disable testing-library/prefer-screen-queries */
/* eslint-disable testing-library/no-node-access */
import { render } from '@testing-library/react'
import { composeStories } from '@storybook/testing-react'

import * as stories from './Switch.stories'
import { userEvent } from '@storybook/testing-library'

const { DefaultTemplate, LabelTemplate } = composeStories(stories)

describe('<Switch />', () => {
	it('should render properly', () => {
		const { container } = render(<DefaultTemplate />)

		expect(container.firstChild).toBeTruthy()
	})

	it('should render with a label properly', () => {
		const { container, getByText } = render(<LabelTemplate />)

		expect(container.firstChild).toBeTruthy()
		expect(getByText('LightBulb')).toBeVisible()
	})

	test('that if it is toggling properly', () => {
		const { getByRole } = render(<DefaultTemplate />)

		userEvent.click(getByRole('checkbox'))

		expect(getByRole('checkbox')).toBeChecked()
	})
})
