import { useState } from "react"
import Child from "./Child";

const Parent = () => {

    const [show, setShow] = useState(true);

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Parent Component</h1>
            <button onClick={() => setShow(!show)}>{show ? "Unmount Child" : "Mount Child"}</button>
            {
                show && <Child />
            }
        </div>
    )
}

export default Parent
