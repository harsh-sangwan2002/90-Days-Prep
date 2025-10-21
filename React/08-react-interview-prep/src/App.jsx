import { useState } from 'react'
<<<<<<< HEAD
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
=======
import './App.css'

function App() {
  const [list, setList] = useState(['Item 1', 'Item 2', 'Item 3'])

  const handleNewTodo = (e) => {
    if (e.key === 'Enter' && e.target.value.trim() !== '') {
      setList([e.target.value.trim(), ...list])
      e.target.value = ''
    }
  }

  return (
    <div>
      <h1>Todo App</h1>
      <input id='item' type="text" placeholder='Add new Todo' onKeyDown={handleNewTodo} />
      <ul>
        {
          list.map(item => (
            <li key={item}>{item}</li>
          ))
        }
      </ul>
    </div>
>>>>>>> d102f26edf5096a40fc5dc2ce6735561a97a614b
  )
}

export default App
