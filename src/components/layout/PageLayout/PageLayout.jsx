import { AuthenticatedTemplate } from '@azure/msal-react'
import NavigationBar from '../NavigationBar'
import { Footer } from '../Footer/Footer'

export const PageLayout = (props) => {
	return (
		<>
			<NavigationBar />
			<AuthenticatedTemplate>{props.children}</AuthenticatedTemplate>
			<Footer />
		</>
	)
}
