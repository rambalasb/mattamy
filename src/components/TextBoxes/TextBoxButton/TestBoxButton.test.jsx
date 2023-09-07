/* eslint-disable testing-library/prefer-screen-queries */
/* eslint-disable testing-library/no-node-access */
import { render } from '@testing-library/react'
import { composeStories } from '@storybook/testing-react'
import userEvent from '@testing-library/user-event'

import * as stories from './TextBoxButton.stories'

import { mockProps } from '../TextBoxes.mock'

import { getByClass } from 'utils/test.utils'

const {
	BasicTemplate,
	LeftButtonTemplate,
	TextButtonTemplate,
	DisabledTemplate,
	ErrorTemplate,
} = composeStories(stories)

describe('<TextBoxButton />', () => {
	it('should render properly', () => {
		const { container, getByText, getByTestId } = render(
			<BasicTemplate {...mockProps} isRequired={true} />
		)

		expect(container.firstChild).toBeTruthy()
		expect(getByText('Username')).toBeVisible()
		expect(getByTestId('textbox-button')).toBeVisible()
	})

	it('should have button on the left', () => {
		const { container, getByText, getByTestId } = render(
			<LeftButtonTemplate {...mockProps} isRequired={true} />
		)

		expect(container.firstChild).toBeTruthy()
		expect(getByText('Username')).toBeVisible()
		expect(getByTestId('textbox-button')).toBeVisible()
		expect(getByTestId('textbox-button')).not.toHaveClass(
			'textbox-button__right-button'
		)
	})

	it('should have text instead of icon', () => {
		const { getByText, getByTestId } = render(
			<TextButtonTemplate {...mockProps} isRequired={true} />
		)

		expect(getByText('Username')).toBeVisible()
		expect(getByTestId('textbox-button')).toBeVisible()
		expect(getByText('Submit')).toBeVisible()
	})

	it('should be disabled', () => {
		const { getByTestId } = render(
			<DisabledTemplate {...mockProps} isRequired={true} />
		)

		expect(getByTestId('txtUsername')).toBeDisabled()
		expect(getByTestId('textbox-button')).toBeDisabled()
	})

	it('should render as if there is an error', () => {
		const { container, getByTestId } = render(
			<ErrorTemplate {...mockProps} isRequired={true} />
		)

		expect(getByClass(container, 'error-label')).toBeTruthy()
		expect(getByTestId('textbox-button')).toHaveClass('buttonError')
	})

	it('should be able to type', () => {
		const { getByTestId } = render(
			<BasicTemplate
				{...mockProps}
				isRequired={true}
				onChangeHandler={jest.fn()}
			/>
		)

		userEvent.type(getByTestId('txtUsername'), 'Hello{space}World')

		expect(getByTestId('txtUsername')).toHaveValue('Hello World')
	})
})
