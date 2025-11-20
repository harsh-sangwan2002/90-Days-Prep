import { useRef, useState } from 'react'

const StopWatch = () => {

    const [time, setTime] = useState(0);
    const intervalId = useRef(null);

    const displayTime = () => {
        let hours = Math.floor(time / 3600) % 24;
        let minutes = Math.floor(time / 60) % 60;
        let seconds = time % 60;
        return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }

    const handleStart = () => {
        // Logic to start the stopwatch
        // Since react does a bulk update, we use functional update to ensure we get the latest state
        intervalId.current = setInterval(() => {
            setTime(prevTime => prevTime + 1);
        }, 1000);
    }

    const handleStop = () => {
        // Logic to stop the stopwatch
        clearInterval(intervalId.current);
    }

    const handleReset = () => {
        // Logic to reset the stopwatch
        clearInterval(intervalId.current);
        setTime(0);
    }

    return (
        <div className='stopwatch'>
            <h1>StopWatch</h1>
            <p>{displayTime()}</p>
            <div className="buttons">
                <button onClick={handleStart}>Start</button>
                <button onClick={handleStop}>Stop</button>
                <button onClick={handleReset}>Reset</button>
            </div>
        </div>
    )
}

export default StopWatch
