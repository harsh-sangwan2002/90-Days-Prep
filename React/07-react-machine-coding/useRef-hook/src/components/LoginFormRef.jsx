import { useRef } from 'react'

const LoginFormRef = () => {

    console.log("Login Form rendered");

    const userName = useRef(null);
    const password = useRef(null);

    const handleLogin = () => {
        console.log('Username:', userName.current.value);
        console.log('Password:', password.current.value);
    }
    return (
        <div className='login-form'>
            <input type="text" placeholder='Enter username' ref={userName} />
            <input type="password" placeholder='Enter password' ref={password} />
            <button onClick={handleLogin}>Login</button>
        </div>
    )
}

export default LoginFormRef
