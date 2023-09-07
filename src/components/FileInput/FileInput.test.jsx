/* eslint-disable testing-library/prefer-screen-queries */
/* eslint-disable testing-library/no-node-access */
import { render } from '@testing-library/react'
import { composeStories } from '@storybook/testing-react'

import * as stories from './FileInput.stories'
import { userEvent } from '@storybook/testing-library'

const { BasicTemplate, DisabledTemplete } = composeStories(stories)

describe('<FileInput />', () => {
	it('should render properlt', () => {
		const { container } = render(<BasicTemplate />)

		expect(container.firstChild).toBeTruthy()
	})

	it('should render as disabled', () => {
		const { getByTestId } = render(<DisabledTemplete />)

		expect(getByTestId('btnUploadFile')).toBeDisabled()
	})

	it('should be able to upload a file', async () => {
		const { getByTestId } = render(<BasicTemplate acceptedFiles="text/plain" />)

		const fileInput = getByTestId('fiBasicUploads')
		const mockfile = new File([''], 'test.txt', {
			type: 'text/plain',
			lastModifiedDate: new Date(),
			size: 159881,
		})

		expect(fileInput.files.length).toBe(0)
		userEvent.upload(fileInput, mockfile)

		expect(fileInput.files.length).toBe(1)

		const previewWindow = getByTestId('uploadPreview')
		expect(previewWindow).toHaveTextContent('File(s) Preview')
	})

	it('should be able to upload multiple files', async () => {
		const { getByTestId, getByText } = render(
			<BasicTemplate acceptedFiles="text/plain" isMultiple={true} />
		)

		const fileInput = getByTestId('fiBasicUploads')
		const mockfile = new File([''], 'test.txt', {
			type: 'text/plain',
			lastModifiedDate: new Date(),
			size: 159881,
		})

		const mockfile2 = new File([''], 'sample.txt', {
			type: 'text/plain',
			lastModifiedDate: new Date(),
			size: 159881,
		})

		expect(fileInput.files.length).toBe(0)
		userEvent.upload(fileInput, mockfile)

		expect(fileInput.files.length).toBe(1)

		const previewWindow = getByTestId('uploadPreview')
		expect(previewWindow).toHaveTextContent('File(s) Preview')

		expect(fileInput.files.length).toBe(1)
		userEvent.upload(fileInput, mockfile2)

		expect(getByText('sample.txt')).toBeVisible()
	})

	it('should be able to remove a file', async () => {
		const { container, getByTestId } = render(
			<BasicTemplate acceptedFiles="text/plain" isMultiple={true} />
		)

		const fileInput = getByTestId('fiBasicUploads')
		const mockfile = new File([''], 'test.txt', {
			type: 'text/plain',
			lastModifiedDate: new Date(),
			size: 159881,
		})

		expect(fileInput.files.length).toBe(0)
		userEvent.upload(fileInput, mockfile)

		expect(fileInput.files.length).toBe(1)

		const previewWindow = getByTestId('uploadPreview')
		expect(previewWindow).toHaveTextContent('File(s) Preview')

		userEvent.click(getByTestId('btnRemoveFile'))

		expect(container).not.toHaveTextContent('File(s) Preview')
	})

	it('should show file type error', () => {
		const { getByTestId, getByText } = render(
			<BasicTemplate acceptedFiles="text/plain" maxFileSizeInBytes={1598} />
		)

		const fileInput = getByTestId('fiBasicUploads')
		const mockfile = new File([''], 'hello.png', {
			type: 'image/png',
			size: 159881,
		})

		expect(fileInput.files.length).toBe(0)
		userEvent.upload(fileInput, mockfile)

		expect(fileInput.files.length).toBe(1)

		expect(
			getByText(
				'The file type does not match the accepted file type of text/plain'
			)
		).toBeVisible()
	})

	it('should show file size error', () => {
		const { getByTestId, getByText } = render(
			<BasicTemplate acceptedFiles="text/plain" maxFileSizeInBytes={1598} />
		)

		const fileInput = getByTestId('fiBasicUploads')
		const mockfile = new File(['file'], 'sample.txt', {
			type: 'text/plain',
			size: 159881,
		})

		Object.defineProperty(mockfile, 'size', {
			value: 159881,
		})

		expect(fileInput.files.length).toBe(0)
		userEvent.upload(fileInput, mockfile)

		expect(fileInput.files.length).toBe(1)

		expect(
			getByText('The file size is greater then the maximum size of 2 kb')
		).toBeVisible()
	})
})
