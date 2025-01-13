import React from 'react'
import './styles.css'

function Timer({num, handleStart}) {
  return (
    <>
        <div>
            {/* <h1>{num}</h1> */}
            <input type="number" value={num} onChange={handleStart}/>
        </div>
    </>
  )
}

export default Timer