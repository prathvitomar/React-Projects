import React, { useState } from 'react'
import ProgressBar from './ProgressBar';

function FlipkartProgressBar() {
    const [start, setStart] = useState(false);
    const [completed, setCompleted] = useState(false);
    
    function handleStart(){
        setStart(true);
    }
    
    function handleComplete(){
        setCompleted(true);
    }

  return (
    <>
        <div style={{display : 'flex', justifyContent : 'center', alignItems : 'center', flexDirection : 'column'}}>
            <button onClick={handleStart}>Start Progress Bar</button>
            {
                start && <ProgressBar start={start} onComplete={handleComplete}/>
            }
            {completed ? (<p>Completed</p>) : (<p>Loading....</p>)}
        </div>
    </>
  )
}

export default FlipkartProgressBar