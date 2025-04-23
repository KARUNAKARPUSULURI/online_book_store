import React from 'react'
import { Link } from 'react-router-dom'
import { postUsersData } from '../../Services/api'

const Login = () => {
    const [userData, setUserData] = React.useState({ username: '', password: '' })
    const handleChange = (e) => {
        setUserData({...userData, [e.target.name] : e.target.value})
    }
    const handleSubmit = async(e) => {
        e.preventDefault()
        postUsersData(userData).then((data)=> console.log(data))
    }
    return (
        <>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
            }}>
                <div style={{ flex: 1, maxWidth: '50%' }}>
                    <img
                        src='https://img.lovepik.com/element/45009/8997.png_860.png'
                        alt='img'
                        style={{ width: '100%', height: 'auto' }}
                    />
                </div>
                <div style={{ flex: 1, maxWidth: '50%', padding: '20px' }}>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor='username'>Name: </label>
                        <input
                            type='text'
                            placeholder='Enter your name...'
                            id='username'
                            name='username'
                            onChange={handleChange}
                        />
                        <label htmlFor='password'>Password: </label>
                        <input
                            type='password'
                            placeholder='Enter your password...'
                            id='password'
                            name='password'
                            onChange={handleChange}
                        />
                        <button type='submit'>Login</button>
                        <p style={{ color: "blue" }}>
                            Dont have an account? <Link to={"/register"}>SignUp here!!!</Link>
                        </p>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login
