import React, { useState, useContext } from 'react'
import UserContext from '../context/userContext'

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')


    const { setUser } = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({ username, password })
    }

    return (
        <div>
            <h2>LOGIN</h2>
            <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}  // this is used to change the value of the input field 
                className='mr-2'
                placeholder='username' />
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='password' />
            <button
                onClick={handleSubmit}
                className='ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
            >LOGIN</button>

        </div>
    )
}

export default Login