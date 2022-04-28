import { Card, ListGroup, Col } from "react-bootstrap"
import { Link } from 'react-router-dom'
import { useEffect, useState } from "react"
import getIdFromUrl from '../services/GetId'

const MovieInfoCard = ({ info, characters }) => {

    return (
        <div>

            <Col>
                <Card>
                    <Card.Header as="h1">{info.title}</Card.Header>
                                
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
                                <p>{info.episode_id}</p>
                                <p>{info.director}</p>
                                <p>{info.producer}</p>
                                <p>{info.release_date}</p>
                            </div>
                        </div>

                        <h2>Links</h2>

                        <div style={{ display: 'flex' }}>
                            <p style={{ width: '30%' }}><strong>Characters</strong></p>

                            <ListGroup style={{ width: '70%' }}>

                                {characters.map(character => (
                                    <ListGroup.Item key={character} as={Link} to={`/characters/${getIdFromUrl(character)}`}>Character {getIdFromUrl(character)}</ListGroup.Item>
                                ))}
                            </ListGroup>
                        </div>
 
                    </Card.Body>
                        
                </Card>
            </Col>

        </div>
    )
}

export default MovieInfoCard