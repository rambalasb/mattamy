import { useState } from 'react'
import FileInput from '.'

export default {
	title: 'FileInput',
	component: FileInput,
	args: {
		fileInputSubtext: 'Want to upload a file?',
		fileInputLabel: 'File Upload',
		acceptedFiles: 'image/png',
		fileInputId: 'fiBasicUploads',
		isMultiple: false,
	},
}

const Template = (args) => {
	const [uplaodedFiles, setUploadedFiles] = useState([])

	return <FileInput {...args} uploadedFiles={setUploadedFiles} />
}

export const BasicTemplate = Template.bind({})

export const ErrorTemplate = Template.bind({})
ErrorTemplate.args = {
	hasError: true,
	errorMessage: 'Incorrect file format',
}

export const DisabledTemplete = Template.bind({})
DisabledTemplete.args = {
	isDisabled: true,
}
