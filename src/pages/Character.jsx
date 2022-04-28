import CharacterInfoCard from "../components/CharacterInfoCard"
import SWApi from "../services/SWApi"
import { useEffect, useState } from "react"
import { useParams } from "react-router"

const Character = () => {
    const [info, setInfo] = useState([])
    const [movies, setMovies] = useState([])
    const { id } = useParams()

    const getCharacterInfo = async () => {
        setInfo([])

        const data = await SWApi.getPerson(id)

        console.log("Data:", data)
        setInfo(data)
        setMovies(data.films)
    }

    useEffect(() => {
        getCharacterInfo()
    }, [])

    return (
        <div>
            <br />

            <CharacterInfoCard info={info} movies={movies} />
        </div>
    )
}

export default Character