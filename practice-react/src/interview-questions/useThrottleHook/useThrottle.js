import React, { useRef } from 'react'

function useThrottle(callback, delay) {
  const lastExecutionTime = useRef(0);
  const timeoutRef = useRef(null);

  const throttleFunction = (...args) =>{
    const now = Date.now();
    const timeElapsed = now - lastExecutionTime.current;
    if(timeElapsed >= delay){
        callback(...args);
        lastExecutionTime.current = now;
        console.log("Throlled")
    }
    else{
        clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() =>{
            callback(...args);
            lastExecutionTime.current = Date.now();
        }, delay - (now - lastExecutionTime.current))
    }
  }
    return throttleFunction;
}

export default useThrottle