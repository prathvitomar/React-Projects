import React, { useEffect, useRef, useState } from "react";

function FlipkartTimer() {
  const [startTimer, setTimerStart] = useState(false);
  const timerRef = useRef(null);
  const [minutes, setMinutes] = useState("");
  const [hours, setHours] = useState("");
  const [seconds, setSeconds] = useState("");

  useEffect(() => {
    if (startTimer) {
        timerRef.current = setInterval(() => {
        runTimer(seconds, minutes, hours);
      }, 1000);
    } else {
      clearInterval(timerRef.current);
    }
    return () => {
      clearInterval(timerRef.current);
    };
  }, [startTimer, seconds, minutes, hours]);

  function handleStart() {
    setTimerStart(true);
  }

  function handleReset() {
    setTimerStart(false);
    setSeconds(0);
    setMinutes(0);
    setHours(0);
  }

  function runTimer(seconds, minutes, hours) {
    if (seconds === 0 && minutes === 0 && hours === 0) {
      alert("TImer is Up....!!!!");
      setTimerStart(false);
      return;
    }
    if (seconds === "" ) {
      setSeconds(0)
    }
    if (minutes === "" ) {
      setMinutes(0)
    }
    if (hours === "" ) {
      setHours(0)
    }
    if (seconds > 0) {
      setSeconds((prev) => prev - 1);
    } else if (minutes > 0 && seconds === 0) {
      setMinutes((prev) => prev - 1);
      setSeconds(59);
    } else {
      setHours((prev) => prev - 1);
      setMinutes(59);
      
      setSeconds(59);
    }
  }

  return (
    <>
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <div>
              {startTimer ? (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div style={{ padding: "10px" }}>
                    <h3>{hours < 10 ? `0${hours}` : hours}</h3>
                  </div>
                  <div style={{ padding: "10px" }}>
                    <h3>: {minutes < 10 ? `0${minutes}` : minutes}</h3>
                  </div>
                  <div style={{ padding: "10px" }}>
                    <h3>: {seconds < 10 ? `0${seconds}` : seconds}</h3>
                  </div>
                </div>
              ) : (
                <div>
                  <input
                    style={{ width: "50px", height: "30px" }}
                    type="text"
                    value={hours}
                    onChange={(e) => setHours(e.target.value)}
                  />
                  <input
                    style={{ width: "50px", height: "30px" }}
                    type="text"
                    value={minutes}
                    onChange={(e) => setMinutes(e.target.value)}
                  />
                  <input
                    style={{ width: "50px", height: "30px" }}
                    value={seconds}
                    type="text"
                    onChange={(e) => setSeconds(e.target.value)}
                  />
                </div>
              )}
            </div>
            <div>
              <button onClick={handleStart}>Start</button>
              <button onClick={() => setTimerStart(false)}>Stop</button>
              <button onClick={handleReset}>Reset</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FlipkartTimer;
