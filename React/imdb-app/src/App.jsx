import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { lazy, Suspense, useEffect, useState } from 'react'

const Navbar = lazy(() => import('./components/Navbar'))
const MovieListPage = lazy(() => import('./pages/MovieListPage'))
const MovieDetailPage = lazy(() => import('./pages/MovieDetailPage'))
const WatchListPage = lazy(() => import('./pages/WatchListPage'))
const SingleMovie = lazy(() => import('./pages/SingleMovie'))
const NotFound = lazy(() => import('./pages/NotFound'))
const WatchListProvider = lazy(() => import('./context/WatchListProvider'))

function App() {

  // const [component, setComponent] = useState(null);

  // useEffect(() => {
  //   import('./pages/MovieDetailPage').then(module => {
  //     setComponent(() => module.default);
  //   });
  // }, [])

  return (
    <Router>
      <WatchListProvider>
        <Navbar />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path='/' element={<MovieListPage />} />
            <Route path='/details' element={<MovieDetailPage />} />
            <Route path='/watchlist' element={<WatchListPage />} />
            <Route path='/movie/:id' element={<SingleMovie />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </WatchListProvider>
    </Router>
  )
}

export default App
