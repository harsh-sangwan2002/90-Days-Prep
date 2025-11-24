import './App.css'
import SearchBox from './components/SearchBox';

function App() {

  const searchItems = ["USA", "Canada", "Mexico", "Germany", "France", "Italy", "Algeria", "Australia", "India", "China", "Japan"];

  return (
    <div>
      <h1>SearchBox</h1>
      <SearchBox items={searchItems} />
    </div>
  )
}

export default App
