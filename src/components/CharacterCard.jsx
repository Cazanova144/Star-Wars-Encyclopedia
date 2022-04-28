import { Card, ListGroup, Button, Col } from "react-bootstrap"
import { Link } from 'react-router-dom'
import getIdFromUrl from '../services/GetId'

const CharacterCard = ({ characters }) => {
    console.log("Characters", characters)

    return (
        <div style={{ display: 'flex', flexWrap: 'wrap' }} className="mb-5">

            {characters.map(character => (
                <Col key={getIdFromUrl(character.url)}>
                        <Card style={{ width: '24rem' }} className="mb-5">
                            <Card.Header>{character.name}</Card.Header>
                                
                            <Card.Body>
                                <ListGroup>
                                    <ListGroup.Item><strong>Gender</strong> {character.gender}</ListGroup.Item>
                                    <ListGroup.Item><strong>Born</strong> {character.birth_year}</ListGroup.Item>
                                    <ListGroup.Item><strong>In</strong> {character.films.length} films</ListGroup.Item>
                                </ListGroup>

                                <br />

                                <div className="justify-content-md-center d-flex">
                                    <Button as={Link} to={`/characters/${getIdFromUrl(character.url)}`}>Read more</Button>
                                </div>

                                    
                            </Card.Body>
                        
                        </Card>
                    </Col>

            ))}

        </div>
    )
}

export default CharacterCard