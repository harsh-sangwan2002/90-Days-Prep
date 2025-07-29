import { useRef } from "react"

const Login = () => {

    let userName = useRef('');
    let password = useRef('');

    const handleLogin = () => {
        console.log(userName.current);
        console.log(password.current);
    }

    return (
        <div className="login-container">
            <input ref={userName} type="text" placeholder='Enter your name' onChange={(e) => userName.current = e.target.value} />
            <input ref={password} type="password" placeholder='Enter your password' onChange={(e) => password.current = e.target.value} />
            <button onClick={handleLogin}>Login</button>
        </div>
    )
}

export default Login
