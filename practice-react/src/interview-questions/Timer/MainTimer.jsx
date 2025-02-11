import { useState } from "react";
import Timer from "./components/Timer";
import "./styles.css";

export default function MainTimer() {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [totalDuration, setTotalDuration] = useState(0);

  function handleTime() {
    setTotalDuration((hours * 3600 + minutes * 60 + seconds) * 1000);
  }

  function stopTimer() {}

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <div>
        <input
          type="number"
          value={hours}
          onChange={(e) => setHours(e.target.value)}
        />
        <input
          type="number"
          value={minutes}
          onChange={(e) => setMinutes(e.target.value)}
        />
        <input
          type="number"
          value={seconds}
          onChange={(e) => setSeconds(e.target.value)}
        />
        <button onClick={handleTime}>Start Timer</button>
        <button onClick={stopTimer}>Stop Timer</button>
      </div>
      <Timer duration={totalDuration} />
    </div>
  );
}
