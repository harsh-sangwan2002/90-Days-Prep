import { useState, useCallback, memo } from "react";

const Child = memo(({ onClick }) => {
    console.log("Child rendered");
    return <button onClick={onClick}>Click me</button>;
});

const Parent = () => {
    const [count, setCount] = useState(0);

    // Without useCallback, handleClick would be recreated on every render
    const handleClick = useCallback(() => {
        console.log("Clicked!");
    }, []);

    return (
        <>
            <p>Count: {count}</p>
            <button onClick={() => setCount(c => c + 1)}>Increment</button>
            <Child onClick={handleClick} />
        </>
    );
};

export default Parent;