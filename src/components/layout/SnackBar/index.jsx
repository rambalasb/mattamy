import React from 'react'
import { Stack } from '@mui/material'
import Alert from 'components/common/Alert'
import { useAppContext } from 'contexts/AppContext'

const SnackBar = () => {
	const { globalAlertState, hideAlert } = useAppContext()

	const { open, type, title, message } = globalAlertState

	return (
		<>
			{open && (
				<Stack alignItems={'center'} margin={2}>
					<Alert
						type={type}
						title={title}
						message={message}
						onClose={hideAlert}
					/>
				</Stack>
			)}
		</>
	)
}

export default SnackBar
