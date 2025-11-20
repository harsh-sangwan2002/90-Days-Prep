import { useState } from "react"

const Input = () => {

    const [text, setText] = useState("");
    console.log("Input Rendered");

    return (
        <div className='input-section'>
            <h1>Input Section</h1>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
            <h2>Typed Text: {text}</h2>
        </div>
    )
}

export default Input
