import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MovieListPage from './pages/MovieListPage'
import MovieDetailsPage from './pages/MovieDetailsPage'
import WatchListPage from './pages/WatchListPage'
import Navbar from './components/Navbar'
import { useState } from 'react'

const App = () => {

  const [watchlist, setWatchlist] = useState({});

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<MovieListPage watchlist={watchlist} setWatchlist={setWatchlist} />} />
        <Route path="/details" element={<MovieDetailsPage />} />
        <Route path="/watchlist" element={<WatchListPage watchlist={watchlist} setWatchlist={setWatchlist} />} />
      </Routes>
    </Router>
  )
}

export default App
