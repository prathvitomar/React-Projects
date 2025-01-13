import React, { useRef } from 'react'

function Refs() {
    const inputRef = useRef(null);

    function handleRef(){
        inputRef.current.focus();
    }
    console.log("Component Rerendered.!!!")

  return (
    <>
        <input type="text" ref={inputRef}/>
        <button onClick={handleRef}>Focus</button>
    </>
  )
}

export default Refs