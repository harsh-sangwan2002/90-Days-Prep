import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MovieListPage from './pages/MovieListPage'
import MovieDetailsPage from './pages/MovieDetailsPage'
import WatchListPage from './pages/WatchListPage'
import Navbar from './components/Navbar'
import { Provider } from 'react-redux'
import store from './redux/Store'

const App = () => {
  return (
    <Router>
      <Provider store={store}>
        <Navbar />
        <Routes>
          <Route path="/" element={<MovieListPage />} />
          <Route path="/details" element={<MovieDetailsPage />} />
          <Route path="/watchlist" element={<WatchListPage />} />
        </Routes>
      </Provider>
    </Router>
  )
}

export default App
