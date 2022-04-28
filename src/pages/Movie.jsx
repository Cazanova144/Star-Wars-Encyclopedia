import MovieInfoCard from "../components/MovieInfoCard" 
import SWApi from "../services/SWApi"
import { useEffect, useState } from "react"
import { useParams } from "react-router"

const Movie = () => {
    const [info, setInfo] = useState([])
    const [characters, setCharacters] = useState([])
    const { id } = useParams()

    const getMovieInfo = async () => {
        setInfo([])

        const data = await SWApi.getMovie(id)
        setInfo(data)
        setCharacters(data.characters)
    }

    useEffect(() => {
        getMovieInfo()
    }, [])

    if (!info) {
        return <p>Loading...</p>
    }

    return (
        <>
            <br />

            <MovieInfoCard info={info} characters={characters} />
        </>
    )
}

export default Movie