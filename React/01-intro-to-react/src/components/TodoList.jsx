const Heading = ({ title, color }) => {
    console.log(color);
    return (
        <h1 style={{ color: color }}>{title}</h1>
    )
}
const List = () => {
    return (
        <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            <li>Item 4</li>
        </ul>
    )
}
const Summary = () => {
    return (
        <h3>Summary</h3>
    )
}

const TodoList = () => {
    return (
        <div>
            <Heading title="First Heading" color="red" />
            <Heading title="Second Heading" color="blue" />
            <List />
            <Summary />
        </div>
    )
}

export default TodoList
