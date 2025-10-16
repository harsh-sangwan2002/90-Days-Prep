import { useState } from 'react'
import MovieListPage from './pages/MovieListPage'
import MovieDetailsPage from './pages/MovieDetailsPage'
import WatchListPage from './pages/WatchListPage'
import NotFound from './pages/NotFound'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Header from './components/Header'

function App() {

  const [watchlist, setWatchlist] = useState({});
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<MovieListPage watchlist={watchlist} setWatchlist={setWatchlist} />} />
        <Route path="/details" element={<MovieDetailsPage />} />
        <Route path="/watchlist" element={<WatchListPage watchlist={watchlist} setWatchlist={setWatchlist} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
