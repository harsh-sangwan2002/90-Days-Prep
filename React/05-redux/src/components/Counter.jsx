import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from '../redux/CounterSlice'

const Counter = () => {

    const count = useSelector(state => state.counter.value);
    const dispatch = useDispatch();
    return (
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', justifyContent: 'center' }}>
            <button onClick={() => dispatch(decrement())}>-</button>
            <span>{count}</span>
            <button onClick={() => dispatch(increment())}>+</button>
        </div>
    )
}

export default Counter
