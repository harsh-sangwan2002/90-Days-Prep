import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MovieListPage from './pages/MovieListPage'
import MovieDetailsPage from './pages/MovieDetailsPage'
import WatchListPage from './pages/WatchListPage'
import Navbar from './components/Navbar'
import { useState } from 'react'
import WatchListProvider from './context/WatchlistContext'
import { Provider } from 'react-redux'
import store from './redux/Store'

const App = () => {

  const [watchlist, setWatchlist] = useState({});

  return (
    <Router>
      <Provider store={store}>
        <WatchListProvider value={{ watchlist, setWatchlist }}>
          <Navbar />
          <Routes>
            <Route path="/" element={<MovieListPage watchlist={watchlist} setWatchlist={setWatchlist} />} />
            <Route path="/details" element={<MovieDetailsPage />} />
            <Route path="/watchlist" element={<WatchListPage watchlist={watchlist} setWatchlist={setWatchlist} />} />
          </Routes>
        </WatchListProvider>
      </Provider>
    </Router>
  )
}

export default App
