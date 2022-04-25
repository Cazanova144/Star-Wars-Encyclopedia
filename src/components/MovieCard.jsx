import { Card, ListGroup, Button, Col } from "react-bootstrap"
import { Link } from 'react-router-dom'

const MovieCard = () => {
    return (
        <div style={{ width: '27rem' }} className="mb-5">

                    <Col>
                        <Card>
                            <Card.Header>Movie Title</Card.Header>
                                
                            <Card.Body>
                                <ListGroup>
                                    <ListGroup.Item><strong>Episode</strong> NaN</ListGroup.Item>
                                    <ListGroup.Item><strong>Released</strong> NaN</ListGroup.Item>
                                    <ListGroup.Item>NaN <strong>Characters</strong></ListGroup.Item>
                                </ListGroup>

                                <br />

                                <div className="justify-content-md-center d-flex">
                                    <Button as={Link} to="/movies/:id">Read more</Button>
                                </div>

                                    
                            </Card.Body>
                        
                        </Card>
                    </Col>

                    
    
        </div>
    )
}

export default MovieCard