/* eslint-disable testing-library/prefer-screen-queries */
/* eslint-disable testing-library/no-node-access */
import { render } from '@testing-library/react'
import { composeStories } from '@storybook/testing-react'
import userEvent from '@testing-library/user-event'

import * as stories from './List.stories'

const { BasicTemplate, IconListTemplate, ComponentListTemplate } =
	composeStories(stories)

describe('<List> <ListItem /> </List>', () => {
	it('should render properlt', () => {
		const { container } = render(<BasicTemplate />)

		expect(container.firstChild).toBeTruthy()
	})

	test('that the listItems has a href', () => {
		const { getByRole } = render(<IconListTemplate />)

		expect(getByRole('link', { name: 'Google' })).toBeVisible()
		expect(getByRole('link', { name: 'Google' })).toHaveAttribute('href')
	})

	test('that the listItems has a component', () => {
		const { getByTestId } = render(<ComponentListTemplate />)

		expect(getByTestId('chkTRotK')).toBeVisible()
		userEvent.click(getByTestId('chkTRotK'))

		expect(getByTestId('chkTRotK')).toBeChecked()
	})
})
