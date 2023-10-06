import { Outlet, useNavigate, useParams } from 'react-router-dom'
import { Footer } from '../Footer'
import NavigationBar from '../NavigationBar/NavigationBar'
import TutorialWalkthrough from 'components/TutorialWalkthrough'
import IdleTimer from 'components/layout/IdleTimer/IdleTimer'
import SnackBar from 'components/layout/SnackBar'
import { postRequest } from 'utils/axiosClient'
import { AuthenticatedTemplate, useMsal } from '@azure/msal-react'
import { useEffect } from 'react'
import { EventType } from '@azure/msal-browser'
import { LookupProvider } from 'contexts/LookupContext'

export const Content = () => {
	const { instance } = useMsal()
	const navigate = useNavigate()

	useEffect(() => {
		const accounts = instance.getAllAccounts()
		if (accounts.length > 0) {
			instance.setActiveAccount(accounts[0])
		}

		instance.addEventCallback(async (event) => {
			// set active account after redirect
			if (
				event.eventType === EventType.LOGIN_SUCCESS &&
				event.payload.account
			) {
				const account = event.payload.account
				instance.setActiveAccount(account)
				sessionStorage.setItem('idToken', event.payload.idToken)
				await postRequest('authenticate/createToken', {
					userName: '1234',
				})
					.then((response) => {
						sessionStorage.setItem('jwtToken', response.data.jwttoken)
						navigate('/')
					})
					.catch(() => {
						instance.logoutRedirect({
							postLogoutRedirectUri: '/error',
							onRedirectNavigate: () => {
								// Return false if you would like to stop navigation after local logout
								return false
							},
						})
						navigate('/error')
					})
			}
		})

		// handle auth redired/do all initial setup for msal
		instance
			.handleRedirectPromise()
			.then(async () => {
				// Check if user signed in
				const account = instance.getActiveAccount()
				if (!account) {
					// redirect anonymous user to login page
					await instance.loginRedirect()
				}
			})
			.catch((err) => {
				// TODO: Handle errors
				console.log('promise error', err)
			})
	}, [])

	return (
		<>
			<AuthenticatedTemplate>
				<LookupProvider>
					<NavigationBar />
					<SnackBar />
					<Outlet />
					{/* <Footer /> */}
					<TutorialWalkthrough />
					<IdleTimer />
				</LookupProvider>
			</AuthenticatedTemplate>
		</>
	)
}
