import { useEffect } from 'react'

const Child = () => {

    useEffect(() => {
        console.log("👶 Child component mounted");

        // Cleanup function (runs when component unmounts)
        return () => {
            console.log("🧹 Child component is unmounting...");
            // alert("Child component is unmounting!");
        };
    }, [])

    return (
        <div>
            <h2>I am the Child Component</h2>
        </div>
    )
}

export default Child
