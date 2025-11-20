import { memo } from 'react';

const Child = memo(({ onClick }) => {
    console.log("Child rendered");
    return (
        <div>
            <button onClick={onClick}>Click Me</button>
        </div>
    )
});

export default Child
