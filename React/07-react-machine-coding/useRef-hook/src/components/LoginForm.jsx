import { useState } from 'react'

const LoginForm = () => {

    console.log("Login Form rendered");

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = () => {
        console.log('Username:', username)
        console.log('Password:', password)
    }
    return (
        <div className='login-form'>
            {username}
            <input type="text" placeholder='Enter username' value={username} onChange={(e) => setUsername(e.target.value)} />
            <input type="password" placeholder='Enter password' value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleLogin}>Login</button>
        </div>
    )
}

export default LoginForm
