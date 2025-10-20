import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import store from './redux/Store'
import { Provider } from 'react-redux'
import { lazy, Suspense, useEffect, useState } from 'react'

const MovieListPage = lazy(() => import('./pages/MovieListPage'))
const MovieDetailsPage = lazy(() => import('./pages/MovieDetailsPage'))
const WatchListPage = lazy(() => import('./pages/WatchListPage'))
const NotFound = lazy(() => import('./pages/NotFound'))
const Header = lazy(() => import('./components/Header'))

function App() {
  // const [MovieListPage, setMovieListPage] = useState(null);
  // const [MovieDetailsPage, setMovieDetailsPage] = useState(null);

  // useEffect(() => {
  //   import('./pages/MovieListPage').then((module) => {
  //     setMovieListPage(() => module.default);
  //   });
  //   import('./pages/MovieDetailsPage').then((module) => {
  //     setMovieDetailsPage(() => module.default);
  //   });
  // }, [])

  return (
    <Router>
      <Provider store={store}>
        <Header />
        {/* Suspense is used to handle loading of async components */}
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<MovieListPage />} />
            <Route path="/details" element={<MovieDetailsPage />} />
            <Route path="/watchlist" element={<WatchListPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Provider>
    </Router>
  )
}

export default App
