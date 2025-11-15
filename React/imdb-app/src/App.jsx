import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MovieListPage from './pages/MovieListPage'
import MovieDetailsPage from './pages/MovieDetailsPage'
import WatchListPage from './pages/WatchListPage'
import Navbar from './components/Navbar'
import WatchListProvider from './context/WatchlistContext'
import { Provider } from 'react-redux'
import store from './redux/Store'

const App = () => {
  return (
    <Router>
      <Provider store={store}>
        <WatchListProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<MovieListPage />} />
            <Route path="/details" element={<MovieDetailsPage />} />
            <Route path="/watchlist" element={<WatchListPage />} />
          </Routes>
        </WatchListProvider>
      </Provider>
    </Router>
  )
}

export default App
