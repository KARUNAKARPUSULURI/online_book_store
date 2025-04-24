import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { postUsersData } from '../../Services/api'

const Register = () => {
    const [userData, setUserData] = React.useState({ username: '', password: '', age : "", gender : "", phone_number:"", email: "" })
    const navigate = useNavigate()
    const handleChange = (e) => {
        setUserData({...userData, [e.target.name] : e.target.value})
    }
    const handleSubmit = async(e) => {
        e.preventDefault()
        postUsersData(userData).then((data)=> navigate("/login"))
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
                        <label htmlFor='email'>Email: </label>
                        <input
                            type='email'
                            placeholder='Enter your email...'
                            id='email'
                            name='email'
                            onChange={handleChange}
                        />
                        <label htmlFor='age'>Age: </label>
                        <input
                            type='number'
                            placeholder='Enter your age...'
                            id='age'
                            name='age'
                            onChange={handleChange}
                        />
                        <label htmlFor='phone_number'>Phone Number: </label>
                        <input
                            type='tel'
                            placeholder='Enter your number...'
                            id='phone_number'
                            name='phone_number'
                            onChange={handleChange}
                        />
                        <select name='gender' onChange={handleChange}>
                            <option value={""}>Select</option>
                            <option value={"male"}>Male</option>
                            <option value={"female"}>Female</option>
                        </select>
                        <button type='submit'>Register</button>
                        <p style={{ color: "blue" }}>
                            Already have an account? <Link to={"/login"}>SignIn here!!!</Link>
                        </p>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Register
