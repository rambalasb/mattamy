/* eslint-disable testing-library/prefer-screen-queries */
/* eslint-disable testing-library/no-node-access */
import { render, act } from '@testing-library/react'
import { composeStories } from '@storybook/testing-react'
import { userEvent } from '@storybook/testing-library'

import * as stories from './CheckBox.stories'

const { DefaultTemplate } = composeStories(stories)

describe('<CheckBox />', () => {
	it('should render component', () => {
		const { container } = render(<DefaultTemplate />)

		expect(container.firstChild).toBeTruthy()
	})

	it('should show componenet has focus', () => {
		const { getByTestId } = render(<DefaultTemplate />)

		const testCheckbox = getByTestId('chkBasic')

		act(() => testCheckbox.focus())

		expect(testCheckbox).toHaveFocus()
	})

	it('should be checked when cliked', () => {
		const { getByTestId } = render(
			<DefaultTemplate onChangeHandler={jest.fn} />
		)

		const testCheckbox = getByTestId('chkBasic')

		userEvent.click(testCheckbox)

		expect(testCheckbox).toBeChecked()
	})

	it('should be unclickable when disabled', () => {
		const { getByTestId } = render(<DefaultTemplate isDisabled={true} />)

		const testCheckbox = getByTestId('chkBasic')

		userEvent.click(testCheckbox)

		expect(testCheckbox).not.toBeChecked()
	})
})
