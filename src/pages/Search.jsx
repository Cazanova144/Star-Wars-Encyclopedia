import React from 'react'
import { useEffect, useState, useRef } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import ListGroup from 'react-bootstrap/ListGroup'
import SWApi from '../services/SWApi'
import getIdFromUrl from '../services/GetId'

const Search = () => {
    const [searchInput, setSearchInput] = useState('')
    const [searchResult, setSearchResult] = useState(null)
	const [loading, setLoading] = useState(false)
    const [Page, setPage] = useState(1)
	const searchInputRef = useRef()
    const [searchParams, setSearchParams] = useSearchParams({
        query: '',
        page: 1
    })

    const query = searchParams.get('query')
    const pageQuery = searchParams.get('page')

    const searchPeople = async (searchQuery, page ) => {

        if (searchQuery === null) {
            return
        }
		// set loading to true
		setLoading(true)
		setSearchResult(null)

		// execute search
		const data = await SWApi.searchPeople(searchQuery, page)

        console.log('Data:', data)

		// set loading to false
		setSearchResult(data)
		setLoading(false)
	}

	const handleSubmit = async e => {
		e.preventDefault()

		if (!searchInput.length) {
			return
		}

        setPage(1)

		setSearchParams({ query: searchInput, page: 1 })
	}

    useEffect(() => {
        if (!query) {
            setSearchInput('')
            setSearchResult(null)
            return
        }

        setSearchParams({ query: searchInput, page: Page })

        setSearchInput(query, Page)
        searchPeople(query, Page)
    }, [query, Page])

    return (
        <>
            <br />

            <h1>Search</h1> 

            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-5">
                    <Form.Label>Search Query</Form.Label>
                        <Form.Control
                            onChange={e => setSearchInput(e.target.value)}
                            placeholder="Enter your search query"
                            ref={searchInputRef}
                            required
                            type="text"
                            value={searchInput}
                        />
                </Form.Group>

                <div className="d-flex justify-content-between">
					<Button variant="success" type="submit" disabled={!searchInput.length}>Search</Button>
				</div>
            </Form>

            {loading && (<div className="mt-4">Loading...</div>)}

			{searchResult && (
				<div className="search-result mt-4">

					<ListGroup>
						{searchResult.results.map(hit => (
							<ListGroup.Item
								action
                                as={Link}
                                to={`/characters/${getIdFromUrl(hit.url)}`}
								key={hit.created}
							>
								<h3>{hit.name}</h3>
							</ListGroup.Item>
						))}
					</ListGroup>
                    

                        <div className="d-flex justify-content-between align-items-center my-5">
                            
                                <Button disabled={Page === 1} onClick={() => setPage(prevPage => prevPage - 1)} >Previous Page</Button>

                                <h5>Page {Page}</h5>

                                <Button disabled={searchResult.next === null} onClick={() => setPage(prevPage => prevPage + 1)} >Next Page</Button>
                            
                        </div>

					
				</div>
			)}
            
        </>
    )
}

export default Search