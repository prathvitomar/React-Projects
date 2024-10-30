import React, { useMemo, useState } from "react";

function UseMemoMain() {
  const [number, setNumber] = useState(0);
  const [click, setClick] = useState(true);
  const delay = () =>{
    for (let i = 0; i <= 1000000000; i++) {}
    console.log("Dealyed Function Ran")
    return number
  }
  const delayCount = useMemo(()=>{
    return delay(number)
  },[number]) 
  return (
    <>
        <div>
            <h1>{delayCount}</h1>
            <button onClick={()=> setNumber(prev=> prev + 1)}>Increment</button>
            <button onClick={() => setClick(!click)}>{click ? "Clicked" : "Please Click"}</button>
        </div>
    </>
  )
}

export default UseMemoMain;
