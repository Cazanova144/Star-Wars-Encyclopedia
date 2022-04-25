import { Card, ListGroup, Col } from "react-bootstrap"
import { Link } from 'react-router-dom'

const CharacterInfoCard = () => {
    return (
        <div>

            <Col>
                <Card>
                    <Card.Header as="h1">Character Name</Card.Header>
                                
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
                                <p>NaN</p>
                                <p>NaN</p>
                                <p>NaN</p>
                                <p>NaN</p>
                                <p>NaN</p>
                                <p>NaN</p>
                                <p>NaN</p>
                            </div>
                        </div>

                        <h2>Links</h2>

                        <div style={{ display: 'flex' }}>
                            <p style={{ width: '30%' }}><strong>Movies</strong></p>

                            <ListGroup style={{ width: '70%' }}>
                                <ListGroup.Item as={Link} to="/movies/:id">Episode NaN - Movie Title</ListGroup.Item>
                            </ListGroup>
                        </div>
 
                    </Card.Body>
                        
                </Card>
            </Col>

        </div>
    )
}

export default CharacterInfoCard