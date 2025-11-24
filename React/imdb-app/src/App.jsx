import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/Store'
import { lazy, Suspense, useEffect, useState } from 'react'

const Navbar = lazy(() => import('./components/Navbar'));
const MovieListPage = lazy(() => import('./pages/MovieListPage'));
const MovieDetailsPage = lazy(() => import('./pages/MovieDetailsPage'));
const WatchListPage = lazy(() => import('./pages/WatchListPage'));

const App = () => {

  // const [LazyMovieDetailsPage, setLazyMovieDetailsPage] = useState(null);

  // useEffect(() => {
  //   import('./pages/MovieDetailsPage').then((module) => {
  //     setLazyMovieDetailsPage(() => module.default);
  //   });
  // }, [])

  return (
    <Router>
      <Provider store={store}>
        <Navbar />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<MovieListPage />} />
            <Route path="/details" element={<MovieDetailsPage />} />
            <Route path="/watchlist" element={<WatchListPage />} />
          </Routes>
        </Suspense>
      </Provider>
    </Router>
  )
}

export default App
