/* eslint-disable testing-library/prefer-screen-queries */
/* eslint-disable testing-library/no-node-access */
import { render } from '@testing-library/react'
import { composeStories } from '@storybook/testing-react'

import * as stories from './StatusIndicator.stories'

const { DefaultTemplate } = composeStories(stories)

describe('<StatusIndicator />', () => {
	it('should render properly', () => {
		const { container, getByText } = render(<DefaultTemplate />)

		expect(container.firstChild).toBeTruthy()
		expect(getByText('Submitted')).toBeVisible()
	})
})
