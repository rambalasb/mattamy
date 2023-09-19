import NavigationBar from 'components/layout/NavigationBar'
import AccountSupportPage from 'pages/AccountSupportPage'
import ErrorPage from 'pages/ErrorPage'
import { FAQs } from 'pages/FAQs/FAQs'
import { HomePage } from 'pages/HomePage'
import MyJourneyPage from 'pages/MyJourney'
import { Routes, Route } from 'react-router-dom'

const AppRoutes = () => {
	return (
		<>
			<NavigationBar />
			<Routes>
				<Route index element={<HomePage />} />
				<Route path="/accountSupport" element={<AccountSupportPage />} />
				<Route path="/myJourney" element={<MyJourneyPage />} />
				<Route path="/error" element={<ErrorPage />} />
				<Route path="/FAQ" element={<FAQs />} />
			</Routes>
		</>
	)
}

export default AppRoutes
