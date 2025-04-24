import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { getBooksData } from '../../Services/api'

const Home = () => {
  const [booksData, setBooksData] = useState([])
  const navigate = useNavigate()
  const data = JSON.parse(localStorage.getItem("loggedIn"))
  useEffect(() => {
    if (data) {
      getBooksData().then(data => setBooksData(data))
    } else {
      navigate("/login")
    }
  }, [data]) //{} -> 
  return (
    <div>
      <div>
        <div>
          <button onClick={()=> navigate("/")}>🔙</button>
        </div>
        <div>
          <button onClick={()=>localStorage.removeItem("loggedIn")}>Logout</button>
        </div>
      </div>
      {data ? (
        <>
          {booksData.length > 0 ? (
            <div style={{display: "flex", flexWrap : "wrap", gap:"3rem",
              margin: "10px 20px"
            }}>
              {booksData.map((book, index) => {
                return (
                  <>
                    <div key={book.id} className="card" style={{ width: "18rem", display: "flex" }}>
                      <img src={book.image} className="card-img-top" alt="..." />
                      <div className="card-body">
                        <h5 className="card-title">{book.bookname}</h5>
                        <p className="card-text">{book.description}</p>
                        <button onClick={()=> navigate(`${book.id}`)} type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                          View Book
                        </button>
                      </div>
                    </div>
                  </>
                )
              })}
            </div>
          ) : (
            <></>
          )}
        </>
      ) : (
        <>
          <p style={{ textAlign: "center", color: "red" }}>Please Login to view the books</p>
          <Link to={"/login"}>Login here!!</Link>
        </>
      )}
    </div>
  )
}

export default Home