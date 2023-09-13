import { AuthenticatedTemplate } from '@azure/msal-react'
import NavigationBar from '../NavigationBar'

export const PageLayout = (props) => {
	return (
		<>
			<NavigationBar />
			<AuthenticatedTemplate>
				{props.children}
				<footer>
					<center>
						How did we do?
						<a
							href="https://forms.office.com/Pages/ResponsePage.aspx?id=v4j5cvGGr0GRqy180BHbR73pcsbpbxNJuZCMKN0lURpUMlRHSkc5U1NLUkxFNEtVN0dEOTFNQkdTWiQlQCN0PWcu"
							target="_blank"
							rel="noreferrer"
						>
							{' '}
							Share your experience!
						</a>
					</center>
				</footer>
			</AuthenticatedTemplate>
		</>
	)
}
