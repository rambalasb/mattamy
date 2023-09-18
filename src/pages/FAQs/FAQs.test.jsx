import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import basicTheme from 'theme'
import { FAQs } from './FAQs' // Assuming this file is in the same directory
import { ThemeProvider } from '@mui/material'

import mediaQuery from 'css-mediaquery'

function createMatchMedia(width) {
	return (query) => ({
		matches: mediaQuery.match(query, {
			width,
		}),
		addListener: () => {},
		removeListener: () => {},
	})
}

describe('FAQs Component', () => {
	beforeAll(() => {
		window.matchMedia = createMatchMedia(window.innerWidth)
	})

	test('renders FAQ section with title', () => {
		render(
			<ThemeProvider theme={basicTheme}>
				<FAQs />{' '}
			</ThemeProvider>
		)

		const titleElement = screen.getByText(/FREQUENTLY ASKED QUESTIONS/i)
		expect(titleElement).toBeInTheDocument()
	})

	test('renders filter options', () => {
		render(
			<ThemeProvider theme={basicTheme}>
				<FAQs />{' '}
			</ThemeProvider>
		)
		const filterElement = screen.getByText(/FILTER BY CATEGORY/i)
		expect(filterElement).toBeInTheDocument()
	})

	test('renders questions', () => {
		render(
			<ThemeProvider theme={basicTheme}>
				<FAQs />{' '}
			</ThemeProvider>
		)
		const questionElement = screen.getByText(
			/How do I change my email address?/i
		)
		expect(questionElement).toBeInTheDocument()
	})

	test('clicking a filter updates questions', () => {
		render(<FAQs />)
		const filterOption = screen.getByText(/Profile Information/)
		fireEvent.click(filterOption)

		const questionElement = screen.getByText(
			/How do I change my email address?/i
		)
		expect(questionElement).toBeInTheDocument()
	})

	// Add more test cases as needed...
})
