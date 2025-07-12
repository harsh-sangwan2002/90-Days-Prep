import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import MovieDetailPage from './pages/MovieDetailPage'
import MovieListPage from './pages/MovieListPage'
import WatchListPage from './pages/WatchListPage'
import NotFound from './pages/NotFound'
import { useState } from 'react'
import WatchListProvider from './context/WatchListProvider'

function App() {
  return (
    <Router>
      <WatchListProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<MovieListPage />} />
          <Route path='/details' element={<MovieDetailPage />} />
          <Route path='/watchlist' element={<WatchListPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </WatchListProvider>
    </Router>
  )
}

export default App
