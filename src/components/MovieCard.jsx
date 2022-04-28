import { Card, ListGroup, Button, Col } from "react-bootstrap"
import { Link } from 'react-router-dom'
import getIdFromUrl from '../services/SWApi'

const MovieCard = ({ movies }) => {

    return (
        <div style={{ display: 'flex', flexWrap: 'wrap-reverse' }} className="mb-5 justify-content-center">

                        {movies.map(movie => (
                            <Col key={movie.episode_id}>
                            <Card style={{ width: '24rem' }} className="mb-5">
                                <Card.Header>{movie.title}</Card.Header>

                                <Card.Body>
                                    <ListGroup>
                                        <ListGroup.Item><strong>Episode</strong> {movie.episode_id}</ListGroup.Item>
                                        <ListGroup.Item><strong>Released</strong> {movie.release_date}</ListGroup.Item>
                                        <ListGroup.Item>{movie.characters.length} <strong>Characters</strong></ListGroup.Item>
                                    </ListGroup>

                                    <br />

                                    <div className="justify-content-md-center d-flex">
                                        <Button as={Link} to={`/movies/:id`}>Read more</Button>
                                    </div>
                                </Card.Body>
                        
                            </Card>
                            </Col> 
                        ))}


                           
    
        </div>
    )
}

export default MovieCard