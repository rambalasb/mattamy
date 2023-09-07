/* eslint-disable testing-library/prefer-screen-queries */
/* eslint-disable testing-library/no-node-access */
import { render } from '@testing-library/react'
import { composeStories } from '@storybook/testing-react'

import * as stories from './ButtonGroup.stories'
import { userEvent } from '@storybook/testing-library'

const { PrimaryTemplate, TwoButtonsTemplate } = composeStories(stories)

describe('<ButtonGroup />', () => {
	it('should render properly', () => {
		const { container } = render(<PrimaryTemplate />)

		expect(container.firstChild).toBeTruthy()
	})

	it('should be able to click on all 3 of the buttons', () => {
		const consoleLogSpy = jest.spyOn(console, 'log')

		const { getByTestId } = render(<PrimaryTemplate />)

		userEvent.click(getByTestId('btnCancel'))
		expect(getByTestId('btnCancel')).toBeVisible()
		expect(consoleLogSpy).toHaveBeenCalledWith('hey there')

		expect(getByTestId('btnClose')).toBeVisible()
		userEvent.click(getByTestId('btnClose'))
		expect(consoleLogSpy).toHaveBeenCalledWith('hello')

		expect(getByTestId('btnSubmit')).toBeVisible()
		userEvent.click(getByTestId('btnSubmit'))
		expect(consoleLogSpy).toHaveBeenCalledWith('hello world')
	})

	it('should be able to click on all 2 of the buttons', () => {
		const consoleLogSpy = jest.spyOn(console, 'log')

		const { getByTestId } = render(<TwoButtonsTemplate />)

		userEvent.click(getByTestId('btnCancel'))
		expect(getByTestId('btnCancel')).toBeVisible()
		expect(consoleLogSpy).toHaveBeenCalledWith('hey there')

		expect(getByTestId('btnSubmit')).toBeVisible()
		userEvent.click(getByTestId('btnSubmit'))
		expect(consoleLogSpy).toHaveBeenCalledWith('hello world')
	})
})
