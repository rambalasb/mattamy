import React from 'react'
import { Container, CssBaseline, ThemeProvider } from '@mui/material'
import basicTheme from './theme'
import AppRoutes from 'Routes'
import { MsalProvider } from '@azure/msal-react'

const App = ({ instance }) => (
	<main>
		<MsalProvider instance={instance}>
			<ThemeProvider theme={basicTheme}>
				<CssBaseline />
				<Container disableGutters maxWidth={false}>
					<AppRoutes />
				</Container>
			</ThemeProvider>
		</MsalProvider>
	</main>
)

export default App
