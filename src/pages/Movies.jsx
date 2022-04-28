import { Container, Row } from "react-bootstrap"
import { useEffect, useState } from "react"
import MovieCard from "../components/MovieCard"
import SWApi from '../services/SWApi'

const Movies = () => {
    const [movies, setMovies] = useState([])
    const [data, setData] = useState([])
    const [showMovies, setShowMovies] = useState(true)
    const [page, setPage] = useState(1)

    const getMovies = async (page) => {
        const data = await SWApi.getMovies(page)

        setData(data)
        setMovies(data.results)

        console.log(data.results)

        console.log(movies)
    }

    useEffect(() => {
        getMovies(page)
    }, [page])

    if (!movies) {
        return <p>Loading...</p>
    }

    return (
        <div>
            <br />

            <h1>Movies</h1>

            <Container style={{}}>
                <Row>
                    
                    {showMovies ? (
                        <>
                            <MovieCard movies={movies} />
                        </>
                    ): null}
                </Row>
            </Container>
             
        </div>
    )
}

export default Movies