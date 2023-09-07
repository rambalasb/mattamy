/* eslint-disable testing-library/prefer-screen-queries */
/* eslint-disable testing-library/no-node-access */
import { render } from '@testing-library/react'
import { composeStories } from '@storybook/testing-react'

import * as stories from './Badge.stories'

const { DefaultTemplate, OutlinedTemplate } = composeStories(stories)

describe('<Badge />', () => {
	it('should render properly', () => {
		const { container } = render(<DefaultTemplate />)

		expect(container.firstChild).toBeTruthy()
	})

	it('should render with just a border', () => {
		const { getByTestId } = render(<OutlinedTemplate />)

		expect(getByTestId('badgeExample')).toHaveClass('outlinedContainer')
	})
})
