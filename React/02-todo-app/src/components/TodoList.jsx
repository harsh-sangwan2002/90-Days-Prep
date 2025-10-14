import { useState } from "react"

const TodoList = ({ title, items }) => {

    const [currTodo, setCurrTodo] = useState("");
    const [todos, setTodos] = useState(items || []);

    return (
        <>
            <h1>{title || "Todo List"}</h1>
            <div style={{ display: 'flex' }}>
                <input type="text" value={currTodo} onChange={(e) => setCurrTodo(e.target.value)} placeholder="Enter your todo" />
                <button onClick={() => setTodos([...todos, currTodo])}>Add</button>
            </div>
            <ul>
                {
                    todos.map((item, idx) =>
                        <li key={idx}>{item}</li>)
                }
            </ul>
        </>
    )
}

export default TodoList
