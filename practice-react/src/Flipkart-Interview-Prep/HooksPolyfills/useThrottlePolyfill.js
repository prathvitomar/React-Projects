import React, { useEffect, useRef, useState } from 'react'

function useThrottlePolyfill(func, delay) {
    const [throttled, setThrottled] = useState(func);
    const lastExecuted = useRef(Date.now());

    useEffect(()=>{
        const handler = setTimeout(()=>{
            let now = Date.now();
            let timeElapsed = now - lastExecuted.current;
            if(timeElapsed>=delay){
                setThrottled(func);
                lastExecuted.current = now;
            }
        }, delay-(Date.now()-lastExecuted.current))

        return ()=>{
            clearTimeout(handler);
        }
    },[delay, func])

    return throttled;
}

export default useThrottlePolyfill