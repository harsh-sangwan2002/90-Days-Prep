import { useState } from 'react'
import MovieListPage from './pages/MovieListPage'
import MovieDetailsPage from './pages/MovieDetailsPage'
import WatchListPage from './pages/WatchListPage'
import NotFound from './pages/NotFound'
import Header from './components/Header'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import store from './redux/Store'
import { Provider } from 'react-redux'

function App() {

  return (
    <Router>
      <Provider store={store}>
        <Header />
        <Routes>
          <Route path="/" element={<MovieListPage />} />
          <Route path="/details" element={<MovieDetailsPage />} />
          <Route path="/watchlist" element={<WatchListPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Provider>
    </Router>
  )
}

export default App
