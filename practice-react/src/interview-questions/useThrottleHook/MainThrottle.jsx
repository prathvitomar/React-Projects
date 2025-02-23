import React, { useEffect, useState } from 'react'
import useThrottle from './useThrottle'

function MainThrottle() {
    const [resize, setResize] = useState({
        width : window.innerWidth,
        height : window.innerHeight
    })
    
    function handleResize (){
        setResize({
            width : window.innerWidth,
            height : window.innerHeight 
        })
    }
    
    const throttledValue = useThrottle(handleResize, 1000);

    useEffect(()=>{
        window.addEventListener("resize", throttledValue)
        return ()=>{
        window.removeEventListener("resize", throttledValue)
        }
    },[throttledValue])

  return (
    <div>{resize.width} x {resize.height}</div>
  )
}

export default MainThrottle