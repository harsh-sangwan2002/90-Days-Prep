import { useState } from "react"

const Counter = () => {

    const [count, setCount] = useState(0);
    console.log("Counter Rendered");
    
    return (
        <div className='counter-section'>
            <h1>Counter Section</h1>
            <button onClick={() => setCount(prevCount => prevCount - 1)}>Decrement</button>
            <h1>Counter: {count}</h1>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Increment</button>
        </div>
    )
}

export default Counter
