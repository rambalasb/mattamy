import { useCallback, useRef, useState } from 'react'
import PropTypes from 'prop-types'

import Button from 'components/Buttons/Button'
import List from 'components/List/List'
import ListItem from 'components/List/ListItem/ListItem'
import StatusIndicator from 'components/StatusIndicator/StatusIndicator'

import { testAttr } from 'utils/test.utils'

import styles from './FileInput.module.css'
import UploadIcon from 'assets/svgs/UploadIcon'
import CloseIcon from 'assets/svgs/CloseIcon'

const DEFAULT_MAX_FILE = 500000
const KILO_BYTES_PER_BYTE = 1000
const IMAGE_TYPE = 'image/png, image/jpeg'

export default function FileInput({
	fileInputId,
	fileInputName,
	fileInputLabel,
	fileInputSubtext,
	successfulUploadMessage,
	maxFileSizeInBytes = DEFAULT_MAX_FILE,
	uploadedFiles,
	acceptedFiles,
	isSuccessful,
	isMultiple,
	isDisabled,
	isRequired,
}) {
	const [errorMessage, setErrorMessage] = useState('')
	const [hasError, setHasError] = useState(false)
	const [files, setFiles] = useState({})

	const fileInputField = useRef()

	const callUploadedFiles = useCallback(
		(files) => {
			uploadedFiles(files)
		},
		[uploadedFiles]
	)

	const handleNewFileUpload = useCallback(
		(e) => {
			const { files: newFiles } = e.target

			if (newFiles.length) {
				let updatedFiles = {}

				for (let file of newFiles) {
					if (file.size <= maxFileSizeInBytes) {
						if (acceptedFiles.includes(file.type)) {
							if (!isMultiple) {
								updatedFiles[file.name] = file

								handleFileErrorUpload('', false)
								break
							}

							updatedFiles[file.name] = file

							handleFileErrorUpload('', false)
						} else {
							handleFileErrorUpload(
								`The file type does not match the accepted file type of ${acceptedFiles}`,
								true
							)
							break
						}
					} else {
						handleFileErrorUpload(
							`The file size is greater then the maximum size of ${convertBytesToKB(
								maxFileSizeInBytes
							)} kb`,
							true
						)
						break
					}
				}

				setFiles((prevFiles) => ({ ...prevFiles, ...updatedFiles }))
				callUploadedFiles(Object.values(updatedFiles))
			}
		},
		[acceptedFiles, callUploadedFiles, isMultiple, maxFileSizeInBytes]
	)

	const handleFileErrorUpload = (message, bool) => {
		setErrorMessage(message)
		setHasError(bool)
	}

	const convertBytesToKB = (bytes) => Math.round(bytes / KILO_BYTES_PER_BYTE)

	const removeFile = useCallback(
		(fileName) => {
			delete files[fileName]
			setFiles({ ...files })
			callUploadedFiles(Object.values(files))
		},
		[callUploadedFiles, files]
	)

	return (
		<section className={styles.container}>
			<div className={styles.label}>
				<label htmlFor={fileInputId}>
					{fileInputLabel}
					{isRequired && <span className="required-field">*</span>}
				</label>
				<sub>{fileInputSubtext}</sub>
			</div>

			<div
				className={`${styles.uploadComponent} ${
					isDisabled
						? styles.disabledComponent
						: hasError
						? styles.errorComponent
						: ''
				}`}
			>
				<p>Drag and Drop your file(s) here.</p>

				<Button
					buttonId="btnUploadFile"
					variant="secondary"
					size="small"
					aria-label="file-uplaod-button"
					className={styles.button}
					disabled={isDisabled}
					onClickHandler={() => {
						fileInputField.current.click()
					}}
				>
					<UploadIcon fillColor="#62b5e5" />
					Upload File(s)
				</Button>

				<input
					{...testAttr(fileInputId)}
					type="file"
					id={fileInputId}
					name={fileInputName}
					ref={fileInputField}
					disabled={isDisabled}
					required={isRequired}
					onChange={handleNewFileUpload}
					accept={acceptedFiles}
				/>
			</div>

			{Object.keys(files).length > 0 && (
				<div {...testAttr('uploadPreview')} className={styles.filePreview}>
					<span>File(s) Preview</span>

					<List listId={`preview_${fileInputId}`}>
						{Object.keys(files).map((fileName, index) => {
							let file = files[fileName]

							return (
								<ListItem key={index} listItemId={index}>
									<div className={styles.files}>
										{IMAGE_TYPE.includes(acceptedFiles) && (
											<img
												className={styles.img}
												src={URL.createObjectURL(file)}
												alt={`file preview ${index}`}
											/>
										)}

										<span className={styles.fileInfo}>
											{fileName}
											<sub>{convertBytesToKB(file.size)} kb</sub>
										</span>
									</div>

									<button
										{...testAttr('btnRemoveFile')}
										name="btnRemoveFile"
										aria-label="remove-file"
										className={styles.removeBtn}
										onClick={() => removeFile(fileName)}
									>
										<CloseIcon />
									</button>
								</ListItem>
							)
						})}
					</List>
				</div>
			)}

			{(hasError || isSuccessful) && (
				<div className={styles.messageContainer}>
					{hasError && (
						<StatusIndicator
							statusId="errorMessage"
							status="ERROR"
							statusMessage={errorMessage}
						/>
					)}

					{isSuccessful && (
						<StatusIndicator
							statusId="successMessage"
							status="SUBMITTED"
							statusMessage={successfulUploadMessage}
						/>
					)}
				</div>
			)}
		</section>
	)
}

FileInput.propTypes = {
	isDisabled: PropTypes.bool,
	isRequired: PropTypes.bool,
	isMultiple: PropTypes.bool,
	isSuccessful: PropTypes.bool,
	fileInputId: PropTypes.node.isRequired,
	fileInputLabel: PropTypes.string.isRequired,
	fileInputName: PropTypes.string,
	fileInputSubtext: PropTypes.string,
	acceptedFiles: PropTypes.string.isRequired,
	successfulUploadMessage: PropTypes.string,
	uploadedFiles: PropTypes.func,
}
