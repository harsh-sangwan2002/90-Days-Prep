import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import MovieDetailPage from './pages/MovieDetailPage'
import MovieListPage from './pages/MovieListPage'
import WatchListPage from './pages/WatchListPage'
import NotFound from './pages/NotFound'
import { useState } from 'react'

function App() {

  const [watchlist, setWatchlist] = useState({});

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<MovieListPage watchlist={watchlist} setWatchlist={setWatchlist} />} />
        <Route path='/details' element={<MovieDetailPage />} />
        <Route path='/watchlist' element={<WatchListPage watchlist={watchlist} setWatchlist={setWatchlist} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
