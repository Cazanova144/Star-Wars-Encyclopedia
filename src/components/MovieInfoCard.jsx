import { Card, ListGroup, Col } from "react-bootstrap"
import { Link } from 'react-router-dom'

const MovieInfoCard = () => {
    return (
        <div>

            <Col>
                <Card>
                    <Card.Header as="h1">Movie Title</Card.Header>
                                
                    <Card.Body>
                        <h2>Attributes</h2>

                        <div style={{ display: 'flex' }}>
                            <div style={{ width: '30%' }}>
                                <p><strong>Episode</strong></p>
                                <p><strong>Director</strong></p>
                                <p><strong>Producer</strong></p>
                                <p><strong>Release date</strong></p>
                            </div>

                            <div>
                                <p>NaN</p>
                                <p>NaN</p>
                                <p>NaN</p>
                                <p>NaN</p>
                            </div>
                        </div>

                        <h2>Links</h2>

                        <div style={{ display: 'flex' }}>
                            <p style={{ width: '30%' }}><strong>Characters</strong></p>

                            <ListGroup style={{ width: '70%' }}>
                                <ListGroup.Item as={Link} to="/characters/:id">Character NaN</ListGroup.Item>
                            </ListGroup>
                        </div>
 
                    </Card.Body>
                        
                </Card>
            </Col>

        </div>
    )
}

export default MovieInfoCard