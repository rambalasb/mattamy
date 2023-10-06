import axios from 'axios'

const axiosClient = axios.create({
	baseURL: process.env.REACT_APP_SERVER_URL, // replace with your API base URL
})

axiosClient.interceptors.request.use(
	(config) => {
		const idToken = sessionStorage.getItem('idToken')
		if (idToken) {
			config.headers.Authorization = `Bearer ${idToken}`
		}
		const jwtToken = sessionStorage.getItem('jwtToken')
		if (jwtToken) {
			config.headers.JwtToken = `jwt ${jwtToken}`
		}

		return config
	},
	(error) => {
		return Promise.reject(error)
	}
)

export const getRequest = (URL) => {
	return axiosClient.get(`/${URL}`).then((response) => response)
}

export const postRequest = (URL, payload) => {
	return axiosClient.post(`/${URL}`, payload).then((response) => response)
}

export const patchRequest = (URL, payload) => {
	return axiosClient.patch(`/${URL}`, payload).then((response) => response)
}

export const deleteRequest = (URL) => {
	return axiosClient.delete(`/${URL}`).then((response) => response)
}
