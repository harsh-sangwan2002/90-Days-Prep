import { useRef, useState } from 'react'
import './App.css'

function App() {

  const [time, setTime] = useState(0);
  const intervalId = useRef(null);

  const displayTime = () => {
    let hours = Math.floor(time / 3600);
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;

    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    return `${hours}:${minutes}:${seconds}`;
  }

  const handleReset = () => {
    clearInterval(intervalId.current);
    setTime(0);
  }

  const handleStart = () => {
    intervalId.current = setInterval(() => {
      setTime(prevTime => prevTime + 1);

      // It is similar to calling multiple times like below
      // But it will do a bulk update and only re-render once 
      // setTime(time + 1);
      // setTime(time + 1);
      // setTime(time + 1);
    }, 1000);
  }
  const handleStop = () => {
    clearInterval(intervalId.current);
  }

  return (
    <div className='stopwatch'>
      <h1>StopWatch</h1>
      <span className='display'>{displayTime()}</span>
      <div className="buttons">
        <button className='start' onClick={handleStart}>Start</button>
        <button className='stop' onClick={handleStop}>Stop</button>
        <button className='reset' onClick={handleReset}>Reset</button>
      </div>
    </div>
  )
}

export default App
