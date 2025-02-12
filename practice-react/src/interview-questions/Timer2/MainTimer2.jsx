import { useState, useEffect } from "react"
import Timer from "./Timer";

export default function MainTimer2(){
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes , setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [duration, setDuration] = useState(0);

    function calculateDuration(){
        const totalMilliseconds =
        (parseInt(days) || 0) * 86400 * 1000 +
        (parseInt(hours) || 0) * 3600 * 1000 +
        (parseInt(minutes) || 0) * 60 * 1000 +
        (parseInt(seconds) || 0) * 1000;
  
      setDuration(totalMilliseconds);
    }

    return (
        <>
            <input type="number" value={days} onChange={(e) => setDays(e.target.value)}/>
            <input type="number" value={hours} onChange={(e) => setHours(e.target.value)}/>
            <input type="number" value={minutes} onChange={(e) => setMinutes(e.target.value)}/>
            <input type="number" value={seconds} onChange={(e) => setSeconds(e.target.value)}/>
            <button onClick={calculateDuration}>Start Timer</button>
            {
                duration > 0 && (
                    <Timer duration={duration}/>
                )
            }
        </>
    )
}