import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getBooksData } from '../../Services/api'

const ViewBook = () => {
    const [book, setBook] = useState({})
    const { id } = useParams()
    const navigate = useNavigate()
    useEffect(() => {
        getBooksData().then(data => {
            const matchedBook = data.find(book => book.id == id)
            setBook(matchedBook)
        })
    }, [])
    console.log(book)
    return (
        <div style={{margin: "30px 30px"}}>
            <div>
                <button onClick={() => navigate("/home")}>🔙</button>
            </div>
            {
                book && (
                    <div style={{ backgroundColor: "gray", display: "flex", justifyContent: "space-around", alignItems: "center", width: "auto", height: "auto" }}>
                        <div>
                            <img src={book.image} alt='book_img' height={"50vh"} width={"100%"} />
                        </div>
                        <div>
                            <h1>{book.bookname}</h1>
                            <p>{book.description}</p>
                            <p>{book.author}</p>
                            <p>{book.price}</p>
                            <p>{book.rating}</p>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default ViewBook