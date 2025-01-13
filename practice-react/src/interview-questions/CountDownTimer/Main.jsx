import React, { useState, useRef } from "react";

const Main = () => {
  const [hour, setHour] = useState("");
  const [minute, setMinute] = useState("");
  const [second, setSecond] = useState("");
  const [isRunning, setIsRunning] = useState(false);
  const timerRef = useRef(null);

  // Start Timer
  const startTimer = () => {
    if (!hour && !minute && !second) return;

    setIsRunning(true);
    timerRef.current = setInterval(() => {
      updateTimer();
    }, 1000);
  };

  // Stop Timer
  const stopTimer = () => {
    setIsRunning(false);
    clearInterval(timerRef.current);
  };

  // Reset Timer
  const resetTimer = () => {
    setHour("");
    setMinute("");
    setSecond("");
    setIsRunning(false);
    clearInterval(timerRef.current);
  };

  // Update Timer Logic
const updateTimer = () => {
    let h = parseInt(hour || 0);
    let m = parseInt(minute || 0);
    let s = parseInt(second || 0);
  
    if (h === 0 && m === 0 && s === 0) {
      resetTimer(); // If time reaches zero, reset and stop the timer.
      return;
    }
  
    if (s > 0) {
      s -= 1; // Decrement seconds.
    } else if (m > 0) {
      m -= 1; // Decrement minutes.
      s = 59; // Reset seconds to 59.
    } else if (h > 0) {
      h -= 1; // Decrement hours.
      m = 59; // Reset minutes to 59.
      s = 59; // Reset seconds to 59.
    }
  
    // Update state with formatted values.
    setHour(h > 0 ? String(h).padStart(2, "0") : "");
    setMinute(m > 0 ? String(m).padStart(2, "0") : "");
    setSecond(s > 0 ? String(s).padStart(2, "0") : "");
  };
  

  return (
    <div className="countdown-timer">
      <h1>Countdown Timer</h1>
      <div className="timer-inputs">
        <input
          type="number"
          placeholder="HH"
          value={hour}
          onChange={(e) => setHour(e.target.value)}
        />
        <span>:</span>
        <input
          type="number"
          placeholder="MM"
          value={minute}
          onChange={(e) => setMinute(e.target.value)}
        />
        <span>:</span>
        <input
          type="number"
          placeholder="SS"
          value={second}
          onChange={(e) => setSecond(e.target.value)}
        />
      </div>
      <div className="timer-buttons">
        <button onClick={isRunning ? stopTimer : startTimer}>
          {isRunning ? "Pause" : "Start"}
        </button>
        <button onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
};

export default Main;
