import React, { useEffect, useRef } from "react";

function UseRefPrac() {
  // const count = useRef(0);
  const focus = useRef(null);

  // const countHandler = () => {
  //   count.current = count.current + 1;    
  //   console.log("Count is : " , count);
  // };

  const focusButton = () => {
    console.log(focus)
  }

  useEffect(()=> {
    focus.current.focus();
  },[])

  return (
    <>
      {/* <h1>count : {count.current}</h1>
      <button onClick={countHandler} type="button">increase count</button> */}
      <input type="text" ref={focus} placeholder="Type Something"/>
      <button type="button" onClick={focusButton}>Ref</button>
    </>
  );
}

export default UseRefPrac;