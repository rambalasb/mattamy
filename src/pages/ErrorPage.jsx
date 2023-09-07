import Button from 'components/Buttons/Button'
import { useMsal } from '@azure/msal-react'
import { useNavigate } from 'react-router-dom'
const ErrorPage = () => {
	const { instance } = useMsal()
	const redirectToError = () => {
		instance.logoutRedirect()
	}
	const navigate = useNavigate()
	const redirectToAccountSupport = () => {
		navigate('/accountSupport')
	}
	return (
		<>
			<h3>Custom Error Page</h3>
			<Button onClick={redirectToAccountSupport} variant="primary-dark">
				Account Support
			</Button>
			<Button onClick={redirectToError} variant="secondary">
				Go to login
			</Button>
		</>
	)
}

export default ErrorPage
