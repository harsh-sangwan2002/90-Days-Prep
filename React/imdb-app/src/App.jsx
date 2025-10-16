import { useState } from 'react'
import MovieListPage from './pages/MovieListPage'
import MovieDetailsPage from './pages/MovieDetailsPage'
import WatchListPage from './pages/WatchListPage'
import NotFound from './pages/NotFound'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import WatchListProvider from './context/WatchListContext'

function App() {

  return (
    <Router>
      <WatchListProvider>
        <Header />
        <Routes>
          <Route path="/" element={<MovieListPage />} />
          <Route path="/details" element={<MovieDetailsPage />} />
          <Route path="/watchlist" element={<WatchListPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </WatchListProvider>
    </Router>
  )
}

export default App
