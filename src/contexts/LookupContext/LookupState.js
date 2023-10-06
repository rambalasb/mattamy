import { createContext, useReducer, useContext, useEffect } from 'react'
import LookupReducer from './LookupReducer'
import userService from 'services/userService'

import { useAppContext } from 'contexts/AppContext'

// Initial state
const initialValue = {
	firstName: '',
	lastName: '',
	email: '',
	divisions: [],
	isNewUser: false,
}

// Create context
export const LookupContext = createContext(initialValue)

// Provider component
export const LookupProvider = ({ children }) => {
	const [state, dispatch] = useReducer(LookupReducer, initialValue)

	const { showAlert } = useAppContext()

	// Wrap object with useMemo
	// const temp = useMemo(() => ({ state, dispatch }), [state, dispatch])

	useEffect(() => {
		const fetchData = async () => {
			try {
				const { firstName, lastName, email, estateResponse } =
					await userService.userLookup()

				dispatch({
					type: 'UPDATE_BASIC_DATA',
					payload: { firstName, lastName, email },
				})

				dispatch({
					type: 'UPDATE_DIVISION_ARRAY',
					payload: estateResponse?.divisions ?? [],
				})
			} catch (err) {
				// TODO: remove console logging
				console.log(err)

				showAlert(
					'error',
					'There was an error in processing your request. ',
					'Please try again later.'
				)
			}
		}

		fetchData()
	}, [])

	return (
		<LookupContext.Provider
			value={{
				...state,
			}}
		>
			{children}
		</LookupContext.Provider>
	)
}

// Context hook
export const useLookupContext = () => {
	const context = useContext(LookupContext)
	return context
}
