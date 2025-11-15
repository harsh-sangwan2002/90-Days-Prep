import { useDispatch, useSelector } from "react-redux"
import { decrement, increment } from "../redux/Counter";

const Counter = () => {

    const count = useSelector(state => state.counter.count);
    const dispatch = useDispatch();

    console.log("Counter Rendered");
    return (
        <div>
            <h1>Counter Component</h1>
            <div style={{ display: "flex", gap: "10px", alignItems: "center", justifyContent: "center" }}>
                <button onClick={() => dispatch(decrement())}>-</button>
                <span>{count}</span>
                <button onClick={() => dispatch(increment())}>+</button>
            </div>
        </div>
    )
}

export default Counter
