import { useState } from 'react';
import './App.css'

const Item = ({ title, content }) => {

  const [flag, setFlag] = useState(false);

  return (
    <div style={{ border: '1px solid #ccc', borderRadius: '10px', padding: '10px', margin: '10px 0' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2>{title}</h2>
        <button onClick={() => setFlag(!flag)}>{flag ? "-" : "+"}</button>
      </header>
      <p>{flag && content}</p>
    </div>
  )
}

function App() {

  const items = [
    {
      title: "Section 1",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
    },
    {
      title: "Section 2",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
    },
    {
      title: "Section 3",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
    }
  ]

  return (
    <section>
      <h1>React Accordian</h1>
      {items.map((item, idx) =>
        <Item key={idx} title={item.title} content={item.content} />)}
    </section>
  )
}

export default App
