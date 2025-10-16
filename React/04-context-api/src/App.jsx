import WatchListProvider from './context/WatchListContext'
import Header from './components/Header'

import './App.css'

function App() {

  return (
    <WatchListProvider>
      <Header />
    </WatchListProvider>
  )
}

export default App
