import { useRef, useState } from "react";

const StopWatch = () => {

    const [time, setTime] = useState(0);
    let intervalId = useRef(null);

    const handleStart = () => {

        intervalId.current = setInterval(() => {
            setTime(prevTime => prevTime + 1);
        }, 1000);
    }

    const handleStop = () => {
        clearInterval(intervalId.current);
    }

    const handleReset = () => {
        clearInterval(intervalId.current);
        setTime(0);
    }

    const displayTime = (time) => {
        let hours = Math.floor(time / 3600);
        let minutes = Math.floor((time / 60) % 60);
        let seconds = time % 60;

        hours = hours < 10 ? `0${hours}` : hours;
        minutes = minutes < 10 ? `0${minutes}` : minutes;
        seconds = seconds < 10 ? `0${seconds}` : seconds;
        return `${hours}:${minutes}:${seconds}`;
    }
    return (
        <div className="stopwatch">
            <h1>Stop Watch</h1>
            <p>{displayTime(time)}</p>
            <div className="buttons">
                <button className="start" onClick={handleStart}>Start</button>
                <button className="stop" onClick={handleStop}>Stop</button>
                <button className="reset" onClick={handleReset}>Reset</button>
            </div>
        </div>
    )
}

export default StopWatch
