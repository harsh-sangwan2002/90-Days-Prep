import './App.css'
import TodoList from './components/TodoList'

function App() {

  return (
    <>
      <TodoList title="My Todo" items={['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5']} />
      <TodoList title="Your Todo" items={['Item A', 'Item B', 'Item C']} />
    </>
  )
}

export default App
