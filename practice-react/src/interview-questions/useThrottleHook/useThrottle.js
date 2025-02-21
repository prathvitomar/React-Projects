import { useEffect, useRef, useState } from 'react'

function useThrottle(value, delay) {
    const [throttled, setThrottled] = useState();
    const lastResize = useRef(Date.now());

    useEffect(()=>{
        const timeout = setTimeout(()=>{
            const now = Date.now();
            const timeElapsed = now - lastResize.current;
            if(timeElapsed >= delay){
                setThrottled(value);
                lastResize.current = now;
            }
        },delay - (Date.now() - lastResize.current))

        return ()=>{
            clearTimeout(timeout);
        }
    },[value, delay])

    return throttled
}

export default useThrottle