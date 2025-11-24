import { useState } from 'react'
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
          list.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))
        }
      </ul>
    </div>
  )
}

export default App
