import { Card, ListGroup, Col } from "react-bootstrap"
import { Link } from 'react-router-dom'
import getIdFromUrl from '../services/GetId'

const CharacterInfoCard = ({ info, movies }) => {
    console.log("info:", info)
    console.log("movies:", movies)

    return (
        <div>

            <Col>
                <Card>
                    <Card.Header as="h1">{info.name}</Card.Header>
                                
                    <Card.Body>
                        <h2>Attributes</h2>

                        <div style={{ display: 'flex' }}>
                            <div style={{ width: '30%' }}>
                                <p><strong>Gender</strong></p>
                                <p><strong>Birth year</strong></p>
                                <p><strong>Height</strong></p>
                                <p><strong>Mass</strong></p>
                                <p><strong>Hair color</strong></p>
                                <p><strong>Skin color</strong></p>
                                <p><strong>Eye color</strong></p>
                            </div>

                            <div>
                                <p>{info.gender}</p>
                                <p>{info.birth_year}</p>
                                <p>{info.height}</p>
                                <p>{info.mass} Kg</p>
                                <p>{info.hair_color}</p>
                                <p>{info.skin_color}</p>
                                <p>{info.eye_color}</p>
                            </div>
                        </div>

                        <h2>Links</h2>

                        <div style={{ display: 'flex' }}>
                            <p style={{ width: '30%' }}><strong>Movies</strong></p>

                            <ListGroup style={{ width: '70%' }}>

                                {movies.map(movie => (
                                    <ListGroup.Item key={movie} as={Link} to={`/movies/${getIdFromUrl(movie)}`}>Movie Number {getIdFromUrl(movie)}</ListGroup.Item>

                                ))}
                            </ListGroup>
                        </div>
 
                    </Card.Body>
                        
                </Card>
            </Col>

        </div>
    )
}

export default CharacterInfoCard