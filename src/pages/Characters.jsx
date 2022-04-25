import { Container, Row } from "react-bootstrap"
import CharacterCard from "../components/CharacterCard"

const Characters = () => {
    return (
        <div>
            <br />

            <h1>Characters</h1>

            <Container>
                <Row>
                    <CharacterCard />
                    <CharacterCard />
                    <CharacterCard />
                    <CharacterCard />
                    <CharacterCard />
                    <CharacterCard />
                </Row>
            </Container>

        </div>
    )
}

export default Characters