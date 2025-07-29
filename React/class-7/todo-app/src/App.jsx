import { useState } from 'react'
import './App.css'

function App() {

  const [todos, setTodos] = useState([]);

  const handleNewTodo = (event) => {
    if (event.key === 'Enter' && event.target.value.trim() !== '') {
      setTodos([event.target.value.trim(), ...todos]);
      event.target.value = '';
    }
  }

  return (
    <div className='todo-app'>
      <h1>Todo App</h1>
      <input type="text" placeholder='Enter a todo' onKeyDown={handleNewTodo} />
      {
        todos.length > 0 ? (
          <ul>
            {todos.map((todo, index) => (
              <li key={todo}>{todo}</li>
            ))}
          </ul>
        ) : (
          <p>No todos added yet.</p>
        )
      }
    </div>
  )
}

export default App
