import { Container, Row } from "react-bootstrap"
import { useEffect, useState } from "react"
import CharacterCard from "../components/CharacterCard"
import SWApi from '../services/SWApi'

const Characters = () => {
    const [characters, setCharacters] = useState([])
    const [data, setData] = useState([])
    const [showCharacters, setShowCharacters] = useState(true)
    const [page, setPage] = useState(1)

    const getPeople = async (page) => {
        const data = await SWApi.getPeople(page)

        setData(data)
        setCharacters(data.results)
    }

    useEffect(() => {
        getPeople(page)
    }, [page])

    if (!characters) {
        return <p>Loading...</p>
    }

    return (
        <div>
            <br />

            <h1>Characters</h1>

            <Container>
                <Row>

                    {showCharacters ? (
                        <>
                            <CharacterCard characters={characters}/>
                        </>
                    ): null}
                </Row>
            </Container>

        </div>
    )
}

export default Characters