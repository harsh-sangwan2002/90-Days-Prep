import { useEffect, useState } from "react"

const Counter = ({ qty, id, handleQuantityChange }) => {

    const [quantity, setQuantity] = useState(qty);

    // componentDidMount
    useEffect(() => { }, [])

    // componentDidMount + componentDidUpdate
    useEffect(() => { })

    // componentDidUpdate
    useEffect(() => {
        setQuantity(qty);
    }, [qty])

    // componentWillUnmount
    useEffect(() => {
        return () => { }
    }, [])

    const handleIncrement = () => {
        setQuantity(quantity + 1);
        handleQuantityChange(id, quantity + 1);
    }

    const handleDecrement = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1);
            handleQuantityChange(id, quantity - 1);
        }
    }

    return (
        <div style={{ display: 'flex', gap: '0.5rem', alignItems: "center" }}>
            <button onClick={handleDecrement}>-</button>
            <span>{quantity}</span>
            <button onClick={handleIncrement}>+</button>
        </div>
    )
}

export default Counter
