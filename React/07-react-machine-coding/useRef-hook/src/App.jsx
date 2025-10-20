import { useRef, useState } from 'react'
import './App.css'

function App() {

  // This is fine if we want to validate on every keystroke and allow re-rendering of the component
  // const [userName, setUserName] = useState('');
  // const [password, setPassword] = useState('');

  const userName = useRef('');
  const password = useRef('');

  // const handleLogin = (e) => {
  //   e.preventDefault();
  //   console.log('Username:', userName);
  //   console.log('Password:', password);
  // }

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Username:', userName?.current?.value);
    console.log('Password:', password?.current?.value);
  }

  return (
    <section className='login-form'>
      <h1>Login Form</h1>
      <input type="text" placeholder='Enter username' ref={userName} />
      <input type="password" placeholder='Enter password' ref={password} />
      <button type='submit' onClick={handleLogin}>Login</button>
    </section>
  )
}

export default App
