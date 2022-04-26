import axios from "axios";

axios.defaults.baseURL = 'https://swapi.dev/api/'

const get = async (endpoint) => {
    const response = await axios.get(endpoint)
    return response.data
}

export const getIdFromUrl = (url) => {
	// eslint-disable-next-line no-unused-vars
	const [_endpoint, id] = url
		.replace('https://swapi.dev/api/', '')
		.slice(0, -1)
		.split('/')

	return id
}
