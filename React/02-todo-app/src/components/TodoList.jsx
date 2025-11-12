import { useState } from "react"

const TodoList = ({ title, myStyles }) => {

    const [currItem, setCurrItem] = useState("");
    const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5']);

    const handleAdd = () => {
        if (!currItem) return;

        console.log("Handle Add Clicked");
        setItems([...items, currItem]);
        setCurrItem("");
    }
    console.log("TodoList Rendered");

    return (
        <div>
            <h1 style={myStyles}>{title || "Todo List"}</h1>
            <div style={{ display: 'flex', gap: '1rem' }}>
                <input type="text" value={currItem} onChange={(e) => setCurrItem(e.target.value)} />
                <button onClick={handleAdd}>Add</button>
            </div>
            <ul>
                {
                    items.map((item, idx) => (
                        <li key={idx}>{item}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default TodoList
