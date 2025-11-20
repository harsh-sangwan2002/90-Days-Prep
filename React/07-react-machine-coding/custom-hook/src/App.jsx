import './App.css'
import DebouncedSearch from './components/DebouncedSearch'
import GitHubProfile from './components/GitHubProfile'

function App() {

  return (
    <div className="App">
      <h1>Custom Hook</h1>
      {/* <GitHubProfile /> */}
      <DebouncedSearch />
    </div>
  )
}

export default App
