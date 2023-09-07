/* eslint-disable testing-library/prefer-screen-queries */
/* eslint-disable testing-library/no-node-access */
import { render } from '@testing-library/react'
import { composeStories } from '@storybook/testing-react'

import * as stories from './TextArea.stories'

import userEvent from '@testing-library/user-event'

const { BasicTemplate, DisabledTemplate, ErrorTemplate } =
	composeStories(stories)

const mockArgs = {
	textAreaName: 'Description',
	textAreaSubtext: 'Enter a desciption about yourself',
	textAreaId: 'txtDescription',
}

describe('<TextArea />', () => {
	it('should render properly', () => {
		const { container, getByText } = render(
			<BasicTemplate {...mockArgs} isRequired={true} />
		)

		expect(container.firstChild).toBeTruthy()
		expect(getByText('Description')).toBeVisible()
	})

	it('should render as disabled', () => {
		const { getByTestId } = render(
			<DisabledTemplate {...mockArgs} isRequired={true} isDisabled={true} />
		)

		expect(getByTestId('txtDescription')).toBeVisible()
		expect(getByTestId('txtDescription')).toBeDisabled()
	})

	it('should render as having an error', () => {
		const { getByTestId, getByText } = render(
			<ErrorTemplate {...mockArgs} isRequired={true} hasError={true} />
		)

		expect(getByTestId('txtDescription')).toHaveClass('error-input')
		expect(getByText('A description is required')).toBeVisible()
	})

	test('character count', () => {
		const { getByTestId, getByText } = render(
			<BasicTemplate
				{...mockArgs}
				isRequired={true}
				onChangeHandler={jest.fn()}
			/>
		)

		expect(getByTestId('txtDescription')).toBeVisible()
		expect(getByText('0/1000')).toBeVisible()

		userEvent.type(getByTestId('txtDescription'), 'Hello{space}World')

		expect(getByText('11/1000')).toBeVisible()
	})
})
