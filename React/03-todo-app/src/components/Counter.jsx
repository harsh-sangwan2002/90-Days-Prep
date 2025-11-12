import { useEffect, useState } from "react"

const Counter = ({ productId, quantity, onUpdate }) => {

    const [count, setCount] = useState(quantity);

    const handleDecrement = () => {
        if (count === 0)
            return;

        setCount(prevCount => prevCount - 1);
        onUpdate(productId, count - 1);
    }

    const handleIncrement = () => {
        setCount(prevCount => prevCount + 1);
        onUpdate(productId, count + 1);
    }

    // componentDidMount and componentDidUpdate
    useEffect(() => {
        console.log("Counter mounted or updated");
    })

    // componentDidMount
    useEffect(() => {
        console.log("Counter mounted");
    }, [])

    // componentDidUpdate
    useEffect(() => {
        console.log('Counter updated - trigger on count change');
    }, [count]);

    // componentWillUnmount
    useEffect(() => {
        return () => {
            console.log("Counter unmounted");
        }
    }, [])

    return (
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <button onClick={handleDecrement}>-</button>
            <span>{count}</span>
            <button onClick={handleIncrement}>+</button>
        </div>
    )
}

export default Counter
