import { Routes, Route } from 'react-router-dom'

import { FAQs } from 'pages/FAQs'
import HomePage from 'pages/HomePage'
import MyJourneyPage from 'pages/MyJourney'
import LoginErrorPage from 'components/layout/LoginErrorPage'
import AccountSupportPage from 'pages/LoginAccountSupport'
import ErrorPage from 'pages/LoginError'
import { Content } from 'components/layout/Content'
import MyDocuments from 'pages/MyDocuments'

const AppRoutes = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<Content />}>
					<Route index element={<HomePage />} />
					<Route path="myJourney" element={<MyJourneyPage />} />
					<Route path="myDocuments" element={<MyDocuments />} />
					<Route path="FAQ" element={<FAQs />} />
				</Route>
				<Route path="error" element={<LoginErrorPage />}>
					<Route index element={<ErrorPage />} />
					<Route path="accountSupport" element={<AccountSupportPage />} />
				</Route>
			</Routes>
		</>
	)
}

export default AppRoutes
