import React, { createContext, useContext, useState } from 'react'

// Create context
export const AppContext = createContext()

// Provider component
export const AppProvider = ({ children }) => {
	const [globalAlertState, setGlobalAlertState] = useState({
		open: false,
		title: '',
		message: '',
		type: 'info', // 'error', 'info', 'success'
	})

	const showAlert = (type, title, message) =>
		setGlobalAlertState({ open: true, title, message, type })

	const hideAlert = () =>
		setGlobalAlertState((prev) => ({ ...prev, open: false }))

	return (
		<AppContext.Provider
			value={{
				globalAlertState,
				showAlert,
				hideAlert,
			}}
		>
			{children}
		</AppContext.Provider>
	)
}

// Context hook
export const useAppContext = () => {
	const context = useContext(AppContext)
	return context
}
