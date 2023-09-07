/* eslint-disable testing-library/prefer-screen-queries */
/* eslint-disable testing-library/no-node-access */
import { render } from '@testing-library/react'
import { userEvent } from '@storybook/testing-library'
import { composeStories } from '@storybook/testing-react'

import * as stories from './RadioButton.stories'

const { DefaultTemplate, ErrorTemplate, DisabledTemplate } =
	composeStories(stories)

describe('<RadioButton />', () => {
	it('should render properly', () => {
		const { container } = render(<DefaultTemplate />)

		expect(container.firstChild).toBeTruthy()
	})

	it('should render as having an error', () => {
		const { container, getByTestId } = render(<ErrorTemplate />)

		expect(container.firstChild).toBeTruthy()
		expect(getByTestId('rbBasic')).toHaveClass('errorInput')
	})

	it('should render as having being disabled', () => {
		const { container, getByTestId } = render(<DisabledTemplate />)

		expect(container.firstChild).toBeTruthy()
		expect(getByTestId('rbBasic')).toBeDisabled()
	})

	test('that a user is able to select the radiobutton', () => {
		const { getByTestId } = render(<DefaultTemplate />)

		getByTestId('rbBasic').focus()
		userEvent.click(getByTestId('rbBasic'))

		expect(getByTestId('rbBasic')).toBeChecked()
	})
})
