// The component's name must start with an uppercase letter
function Heading({ name, color }) {

    return (
        <h1 style={{ color: `${color}` }}>{name}</h1>
    )
}

function List() {
    return (
        <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            <li>Item 4</li>
            <li>Item 5</li>
        </ul>
    )
}

function Summary() {
    return (
        <p>Summary</p>
    )
}

export function TodoList() {
    return (
        <div>
            <Heading name="Heading 1" color="red" />
            <Heading name="Heading 2" color="green" />
            <List />
            <Summary />
        </div>
    )
}