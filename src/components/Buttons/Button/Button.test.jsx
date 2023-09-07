/* eslint-disable testing-library/prefer-screen-queries */
/* eslint-disable testing-library/no-node-access */
import { render } from '@testing-library/react'
import { composeStories } from '@storybook/testing-react'

import * as stories from './Button.stories'

const { PrimaryTemplate, OutlinedTemplate } = composeStories(stories)

describe('<Button />', () => {
	it('should render properly', () => {
		const { container } = render(<PrimaryTemplate />)

		expect(container.firstChild).toBeTruthy()
	})

	it('should render outlined properly', () => {
		const { container } = render(<OutlinedTemplate />)

		expect(container.firstChild).toBeTruthy()
	})

	it('should render properly as disabled', () => {
		const { container, getByTestId } = render(
			<PrimaryTemplate isDisabled={true} />
		)

		expect(container.firstChild).toBeTruthy()
		expect(getByTestId('btnBasic')).toBeDisabled()
	})
})
