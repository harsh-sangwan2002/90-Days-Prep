import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MovieListPage from './pages/MovieListPage'
import MovieDetailsPage from './pages/MovieDetailsPage'
import WatchListPage from './pages/WatchListPage'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<MovieListPage />} />
        <Route path="/details" element={<MovieDetailsPage />} />
        <Route path="/watchlist" element={<WatchListPage />} />
      </Routes>
    </Router>
  )
}

export default App
