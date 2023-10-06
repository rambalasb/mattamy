import React from 'react'
import { Container, CssBaseline, ThemeProvider } from '@mui/material'
import basicTheme from './theme'
import AppRoutes from 'Routes'
import { MsalProvider } from '@azure/msal-react'
import { AppProvider } from 'contexts/AppContext'

const App = ({ instance }) => (
	<main>
		<MsalProvider instance={instance}>
			<ThemeProvider theme={basicTheme}>
				<AppProvider>
					<CssBaseline />
					<Container disableGutters maxWidth={false}>
						<AppRoutes />
					</Container>
				</AppProvider>
			</ThemeProvider>
		</MsalProvider>
	</main>
)

export default App
