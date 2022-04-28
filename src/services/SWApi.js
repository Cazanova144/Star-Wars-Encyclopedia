import axios from "axios";

axios.defaults.baseURL = 'https://swapi.dev/api'

const getMovies = async () => {
    const res = await axios.get(`/films`)
    return res.data
}

const getMovie = async (id) => {
    const res = await axios.get(`/films/${id}`)
    return res.data
}

const getPeople = async (page) => {
    const res = await axios.get(`/people/?page=${page}`)
    return res.data
}

const getPerson = async (id) => {
    const res = await axios.get(`/people/${id}`)
    return res.data
}

export default {
    getMovies,
    getMovie,
    getPeople,
    getPerson,
}