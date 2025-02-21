import React, { useEffect, useState } from 'react'
import useThrottle from './useThrottle';

function MainThrottle() {
    const [resize, setResize] = useState({
        width : window.innerWidth,
        height : window.innerHeight
    });

    const handleThrottle = useThrottle(handleResize, 500);

    useEffect(() =>{
        window.addEventListener("resize", handleThrottle);
        return ()=>{
            window.removeEventListener("resize", handleThrottle);
        }
    },[])

    function handleResize() {
        setResize({
            width : window.innerWidth,
            height : window.innerHeight
        })
    }

  return (
    <>
        <h1>{resize.width} X {resize.height}</h1>
    </>
  )
}

export default MainThrottle