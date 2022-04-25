import { Card, ListGroup, Button, Col } from "react-bootstrap"
import { Link } from 'react-router-dom'

const CharacterCard = () => {
    return (
        <div style={{ width: '27rem' }} className="mb-5">

                    <Col>
                        <Card>
                            <Card.Header>Character Name</Card.Header>
                                
                            <Card.Body>
                                <ListGroup>
                                    <ListGroup.Item><strong>Gender</strong> NaN</ListGroup.Item>
                                    <ListGroup.Item><strong>Born</strong> NaN</ListGroup.Item>
                                    <ListGroup.Item><strong>In</strong> NaN films</ListGroup.Item>
                                </ListGroup>

                                <br />

                                <div className="justify-content-md-center d-flex">
                                    <Button as={Link} to="/characters/:id">Read more</Button>
                                </div>

                                    
                            </Card.Body>
                        
                        </Card>
                    </Col>

                    
    
        </div>
    )
}

export default CharacterCard