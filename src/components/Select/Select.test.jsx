/* eslint-disable testing-library/prefer-screen-queries */
/* eslint-disable testing-library/no-node-access */
import { render } from '@testing-library/react'
import { composeStories } from '@storybook/testing-react'
import userEvent from '@testing-library/user-event'

import * as stories from './Select.stories'

const {
	DefaultTemplate,
	ErrorTemplate,
	DisabledTemplate,
	MultiSelectTemplate,
} = composeStories(stories)

describe('<Select />', () => {
	it('should render properly', () => {
		const { container } = render(<DefaultTemplate />)

		expect(container.firstChild).toBeTruthy()
	})

	it('should render properly when there is an error', () => {
		const { getByTestId } = render(<ErrorTemplate />)

		expect(getByTestId('drpSelect_button')).toHaveClass('error-input')
	})

	it('should render properly when disabled', () => {
		const { getByTestId } = render(<DisabledTemplate />)

		expect(getByTestId('drpSelect_button')).toBeDisabled()
	})

	it('should render the options', async () => {
		const { getByTestId, findByText } = render(<DefaultTemplate />)

		userEvent.click(getByTestId('drpSelect_button'))

		expect(await findByText('Husky')).toBeVisible()
	})

	it('should show option by using Tab', async () => {
		const { getByTestId, findByText } = render(
			<DefaultTemplate onChangeHandler={jest.fn()} />
		)

		userEvent.tab()
		expect(getByTestId('drpSelect_button')).toHaveFocus()

		userEvent.keyboard('{Enter}')
		expect(await findByText('Husky')).toBeVisible()
	})

	it('should show selected option', async () => {
		const { getByTestId, findByText, getByText } = render(
			<DefaultTemplate onChangeHandler={jest.fn()} />
		)

		userEvent.click(getByTestId('drpSelect_button'))

		expect(await findByText('Husky')).toBeVisible()
		userEvent.click(getByText('Husky'))

		expect(getByTestId('drpSelect_button')).toHaveTextContent('Husky')
	})

	it('should show selected option by using the keyboard', async () => {
		const { getByTestId, findByText, getByText } = render(
			<DefaultTemplate onChangeHandler={jest.fn()} />
		)

		getByTestId('drpSelect_button').focus()
		expect(getByTestId('drpSelect_button')).toHaveFocus()

		userEvent.keyboard('{Enter}')
		expect(await findByText('Boston Terrier')).toBeVisible()

		getByText('Boston Terrier').focus()
		userEvent.keyboard('{Enter}')
		expect(getByTestId('drpSelect_button')).toHaveTextContent('Boston Terrier')
	})

	it('should allow multiple selections', async () => {
		const { getByTestId, findByText, getByText } = render(
			<MultiSelectTemplate onChangeHandler={jest.fn()} />
		)

		const multiSelectBtn = getByTestId('drpMultiSelect_button')

		userEvent.click(multiSelectBtn)
		expect(await findByText('Bulbasaur')).toBeVisible()

		userEvent.click(getByText('Bulbasaur'))
		expect(multiSelectBtn).toHaveTextContent('Bulbasaur')

		userEvent.click(multiSelectBtn)
		expect(getByText('Pikachu')).toBeVisible()

		userEvent.click(getByText('Cyndaquil'))
		expect(multiSelectBtn).toHaveTextContent('Bulbasaur')
		expect(multiSelectBtn).toHaveTextContent('Cyndaquil')
	})

	it('should be able to remove one of the selections', async () => {
		const { getByTestId, findByText, getByText } = render(
			<MultiSelectTemplate onChangeHandler={jest.fn()} />
		)

		const multiSelectBtn = getByTestId('drpMultiSelect_button')

		userEvent.click(multiSelectBtn)
		expect(await findByText('Bulbasaur')).toBeVisible()

		userEvent.click(getByText('Bulbasaur'))
		expect(multiSelectBtn).toHaveTextContent('Bulbasaur')

		userEvent.click(multiSelectBtn)
		userEvent.click(getByText('Cyndaquil'))

		userEvent.click(multiSelectBtn)
		userEvent.click(getByText('Torchic'))

		expect(multiSelectBtn).toHaveTextContent('Bulbasaur')
		expect(multiSelectBtn).toHaveTextContent('Cyndaquil')
		expect(multiSelectBtn).toHaveTextContent('Torchic')

		userEvent.click(getByTestId('Torchic-close'))
		expect(multiSelectBtn).not.toHaveTextContent('Torchic')
	})
})
