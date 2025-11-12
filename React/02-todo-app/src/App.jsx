import './App.css'
import TodoList from './components/TodoList'

function App() {

  return (
    <>
      <TodoList title="My Todo" myStyles={{ color: 'red' }} />
      {/* <TodoList title="Your Todo" myStyles={{ color: 'blue' }} /> */}
    </>
  )
}

export default App
