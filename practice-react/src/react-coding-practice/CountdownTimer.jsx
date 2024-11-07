import React, { useEffect, useState } from "react";

function CountdownTimer() {
  const [timeData, setTimeData] = useState({
    seconds: 0,
    minutes: 0,
    hours: 0,
  });

  const [pause, setPause] = useState(false)
  const [hour, setHour] = useState(0)
  const [minute, setMinute] = useState(0)

  function handleTime(){
    if(timeData.seconds <= 0 && timeData.minutes <= 0 && timeData.hours <= 0){
        alert("Timer is up")
    }
    if(timeData.seconds === 0){
        if(timeData.minutes > 0){
            setTimeData(prev => (
                {
                    ...prev,
                    minutes : prev.minutes -1,
                    seconds : 59
                }
            ))
        }
        else if(timeData.hours > 0){
            setTimeData(prev => (
                {
                    hours : prev.hours - 1,
                    minutes : 59,
                    seconds : 59,
                }
            ))
        }
    }
    else{
        setTimeData(prev => (
            {
                ...prev,
                seconds : timeData.seconds - 1
            }
        ))
    }
  }

  useEffect(()=>{
    if(pause || timeData.hours === 0 && timeData.minutes === 0 && timeData.seconds === 0){
        setHour(0)
        setMinute(0)
        return;
    }
    let timeout = setTimeout(handleTime,1000)
    return(()=> clearTimeout(timeout))
  }, [timeData, pause])

  
  function handlePause(){
    setPause(prev => !prev)
  }

  function handleReset(){
    setTimeData({
        seconds : 0,
        minutes : 0,
        hours : 0,
    })
    setPause(false)
  }

  function startTimer(){
    setTimeData((prev)=>(
        {
            ...prev,
            hours : hour,
            minutes : minute
        }
    ))
    setPause(false)
  }

  return (
    <>
    <div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div>
          <div
            style={{
              height: "100px",
              width: "100px",
              backgroundColor: "gray",
              marginBottom: "10px",
            }}
          >
            <h1>{timeData.hours}</h1>
            <h2>Hours</h2>
          </div>
        </div>
        <div>
          <div
            style={{
              height: "100px",
              width: "100px",
              backgroundColor: "gray",
              marginBottom: "10px",
            }}
          >
            <h1>{timeData.minutes}</h1>
            <h2>Minutes</h2>
          </div>
        </div>
        <div>
          <div
            style={{
              height: "100px",
              width: "100px",
              backgroundColor: "gray",
              marginBottom: "10px",
            }}
          >
            <h1>{timeData.seconds}</h1>
            <h2>Seconds</h2>
          </div>
        </div>
    </div>

    <div>
    <div>
        <h2>Set Hours</h2>
        <input type="number" value={hour} onChange={(e)=> setHour(e.target.value)}/>
    </div>
    <div>
        <h2>Set Minutes</h2>
        <input type="number" value={minute} onChange={(e)=> setMinute(e.target.value)}/>
    </div>
    <div>
        <button onClick={startTimer}>Start Timer</button>
    </div>
    </div>


    <div>
        <button onClick={handlePause}>{pause ? "Resume" : "Pause"}</button>
        <button onClick={handleReset}>Reset</button>
    </div>

      </div>
    </>
  );
}

export default CountdownTimer;
