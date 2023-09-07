/* eslint-disable testing-library/prefer-screen-queries */
/* eslint-disable testing-library/no-node-access */
import { render } from '@testing-library/react'
import { composeStories } from '@storybook/testing-react'

import * as stories from './TextBox.stories'

import { mockProps } from '../TextBoxes.mock'
import userEvent from '@testing-library/user-event'

const { BasicTemplate, DisabledTemplate, ErrorTemplate, FooterTemplate } =
	composeStories(stories)

describe('<TextBox />', () => {
	it('should render properly', () => {
		const { container, getByText } = render(
			<BasicTemplate {...mockProps} isRequired={true} />
		)

		expect(container.firstChild).toBeTruthy()
		expect(getByText('Username')).toBeVisible()
	})

	it('should render properly as disabled', () => {
		const { getByLabelText } = render(
			<DisabledTemplate
				{...mockProps}
				isDisabled={true}
				hasCount={true}
				textBoxFooter={'Please enter a username or email address'}
			/>
		)

		expect(getByLabelText('Username')).toBeDisabled()
	})

	it('should render properly when there is an error', () => {
		const { getByText, getByTestId } = render(
			<ErrorTemplate
				{...mockProps}
				hasError={true}
				errorMessage="Please enter a username"
				hasCount={true}
			/>
		)

		expect(getByTestId('txtUsername')).toHaveClass('error-input')
		expect(getByText('Please enter a username')).toBeVisible()
	})

	it('should render footer', () => {
		const { getByText } = render(<FooterTemplate {...mockProps} />)

		expect(getByText('I am a footer for a textbox')).toBeVisible()
	})

	it('should decrease letter count', () => {
		const { getByTestId, getByText } = render(
			<BasicTemplate
				{...mockProps}
				hasCount={true}
				onChangeHandler={jest.fn()}
			/>
		)

		expect(getByText('0/256')).toBeVisible()

		userEvent.type(getByTestId('txtUsername'), 'Hello{space}World')

		expect(getByText('11/256')).toBeVisible()
	})
})
