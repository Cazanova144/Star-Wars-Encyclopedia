import { Container, Row } from "react-bootstrap"
import MovieCard from "../components/MovieCard"

const Movies = () => {
    return (
        <div>
            <br />

            <h1>Movies</h1>

            <Container>
                <Row>
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
                </Row>
            </Container>
             
        </div>
    )
}

export default Movies