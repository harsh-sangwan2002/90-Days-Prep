import { useState } from 'react'
import './App.css'
import Parent from './components/Parent'
import SearchInput from './components/SearchInput'
import CommentBox from './components/CommentBox'
import Accordian from './components/Accordian'

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
      {/* <h1>Todo App</h1>
      <input id='item' type="text" placeholder='Add new Todo' onKeyDown={handleNewTodo} />
      <ul>
        {
          list.map(item => (
            <li key={item}>{item}</li>
          ))
        }
      </ul> */}
      {/* <Parent /> */}
      {/* <SearchInput /> */}
      {/* <CommentBox /> */}
      <Accordian />
    </div>
  )
}

export default App
