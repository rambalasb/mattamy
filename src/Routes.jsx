import AccountSupportPage from 'pages/AccountSupportPage'
import ErrorPage from 'pages/ErrorPage'
import { FAQs } from 'pages/FAQs'
import { HomePage } from 'pages/HomePage'
import { Routes, Route } from 'react-router-dom'
const AppRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<HomePage />} />
			<Route path="/accountSupport" element={<AccountSupportPage />} />
			<Route path="/error" element={<ErrorPage />} />
			<Route path="/FAQ" element={<FAQs />} />
		</Routes>
	)
}

export default AppRoutes
