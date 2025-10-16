import { Provider } from 'react-redux'
import store from './redux/Store'
import Counter from './components/Counter'

import './App.css'

function App() {

  return (
    <Provider store={store}>
      <h1>Counter App Using Redux</h1>
      <Counter />
    </Provider>
  )
}

export default App
