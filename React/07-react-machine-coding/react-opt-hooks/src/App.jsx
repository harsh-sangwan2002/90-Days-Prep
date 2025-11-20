import { useCallback, useMemo, useState } from 'react'
import './App.css'
import Child from './components/Child';

function App() {

  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  console.log("App rendered");

  const heavyCalculation = (num) => {
    console.log("Running heavy calculation...");
    let total = 0;
    for (let i = 0; i < 50000000; i++) {
      total += i;
    }
    console.log("Heavy calculation completed.");
    return num * 2;
  }

  const handleClick = useCallback(() => {
    console.log("Child button clicked");
  }, []);

  // const result = heavyCalculation(count);
  const result = useMemo(() => heavyCalculation(count), [count]);

  return (
    <div className='App'>
      <div className='counter-section'>
        <h1>Counter Section</h1>
        <button onClick={() => setCount(prevCount => prevCount - 1)}>Decrement</button>
        <h1>Counter: {count}</h1>
        <button onClick={() => setCount(prevCount => prevCount + 1)}>Increment</button>
        <p>Heavy calculation result: {result}</p>
      </div>
      <div className='input-section'>
        <h1>Input Section</h1>
        <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
        <h2>Typed Text: {text}</h2>
      </div>
      <Child onClick={handleClick} />
    </div>
  )
}

export default App
