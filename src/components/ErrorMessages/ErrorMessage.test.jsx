/* eslint-disable testing-library/prefer-screen-queries */
/* eslint-disable testing-library/no-node-access */
import { render } from '@testing-library/react'
import { composeStories } from '@storybook/testing-react'

import * as stories from './ErrorMessages.stories'

const { DefaultTemplate } = composeStories(stories)

describe('<ErrorMessage />', () => {
	it('should render properly', () => {
		const { container } = render(<DefaultTemplate />)

		expect(container.firstChild).toBeTruthy()
	})
})
