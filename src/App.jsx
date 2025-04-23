import React from 'react'
import LandingPage from './Components/LandingPage/LandingPage'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Login from './Pages/Login/Login'
import Cart from './Pages/Cart/Cart'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/home' element = {<Home />}/>
        <Route path='/login' element = {<Login />}/>
        <Route path='/cart' element = {<Cart />}/>
      </Routes>
    </div>
  )
}

export default App