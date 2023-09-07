/* eslint-disable testing-library/prefer-screen-queries */
/* eslint-disable testing-library/no-node-access */
import { render } from '@testing-library/react'
import { composeStories } from '@storybook/testing-react'

import * as stories from './TextBoxIcon.stories'

import { mockProps } from '../TextBoxes.mock'
import userEvent from '@testing-library/user-event'

const { BasicTemplate, DisabledTemplate, ErrorTemplate, RightIconTemplate } =
	composeStories(stories)

describe('<TextBoxIcon />', () => {
	it('should render properly', () => {
		const { container, getByText, getByTestId } = render(
			<BasicTemplate {...mockProps} isRequired={true} />
		)

		expect(container.firstChild).toBeTruthy()
		expect(getByText('Username')).toBeVisible()
		expect(getByTestId('textbox-icon')).toBeVisible()
	})

	it('should render icon on the right of textbox', () => {
		const { container, getByText, getByTestId } = render(
			<RightIconTemplate {...mockProps} isRequired={true} />
		)

		expect(container.firstChild).toBeTruthy()
		expect(getByText('Username')).toBeVisible()
		expect(getByTestId('textbox-icon')).toHaveClass('rightIcon')
	})

	it('should render properly as disabled', () => {
		const { getByLabelText } = render(<DisabledTemplate {...mockProps} />)

		expect(getByLabelText('Username')).toBeDisabled()
	})

	it('should render properly when there is an error', () => {
		const { getByText, getByTestId } = render(<ErrorTemplate {...mockProps} />)

		expect(getByTestId('txtUsername')).toHaveClass('error-input')
		expect(getByText('Please enter a username')).toBeVisible()
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
