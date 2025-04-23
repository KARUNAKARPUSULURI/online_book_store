import React, { useEffect, useState } from 'react'
import { getBooksData } from '../../Services/api'
import { Link } from 'react-router-dom'

const Main = () => {
    const [books, setBooks] = useState([])

    useEffect(() => {
        getBooksData().then(data => setBooks(data))
    }, [])
    return (
        <>
            {books.length > 0 ? (
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around", flexWrap: "wrap", gap: "2rem", marginTop: "30px" }}>
                    {books.map((book, index) => {
                        return (
                            <>
                                <div key={book.id} className="card" style={{ width: "18rem", display: "flex" }}>
                                    <img src={book.image} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">{book.bookname}</h5>
                                        <p className="card-text">{book.description}</p>
                                        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                            View Book
                                        </button>
                                        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                            <div className="modal-dialog modal-dialog-centered">
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <h1 className="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
                                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                    </div>
                                                    <div className="modal-body">
                                                        <div className="card mb-3" style={{maxWidth: "540px"}}>
                                                            <div className="row g-0">
                                                                <div className="col-md-4">
                                                                    <img src={book.image} className="img-fluid rounded-start" alt="..." />
                                                                </div>
                                                                <div className="col-md-8">
                                                                    <div className="card-body">
                                                                        <h5 className="card-title">{book.bookname}</h5>
                                                                        <h5 className="card-title"><em>Author: {book.author}</em></h5>
                                                                        <p className="card-text">{book.description}</p>
                                                                        <p className="card-text"><small className="text-muted">{book.price}</small></p>
                                                                        <p className="card-text"><small className="text-muted">{book.rating}</small></p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="modal-footer">
                                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                        <button type="button" className="btn btn-primary">View Details</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })}
                </div>
            ) : (
                <>
                    <p>No Books Found </p>
                </>
            )}
        </>
    )
}

export default Main