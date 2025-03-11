import React, { useEffect, useMemo, useState } from 'react'
import useMemoPolyfill from './useMemoPolyfill';
import useEffectPolyfill from './useEffectPolyfill';
import useThrottlePolyfill from './useThrottlePolyfill';

function MainPolyfills() {
    // const [count1, setCount1] = useState(0);
    // const [count2, setCount2] = useState(100);
    // const expensive = () => {
    //     for(let i = 0; i < 100000000; i++){
    //     }
    //     console.log("Expensive Operation Ran")
    //     return count1 * count1;
    // }

    // const memoizedValue = useMemoPolyfill(expensive, [count1]);
    // console.log("Component Rendered");

    // useEffectPolyfill(()=>{
    //     console.log("Effect Ran")
    // },[count1])

    const [size, setSize] = useState({
        innerHeight,innerWidth
    })

    function handleResize(){
        setSize({
            innerHeight : window.innerHeight,
            innerWidth : window.innerWidth
        })
    }

    const throttledResize = useThrottlePolyfill(handleResize, 2000);

    useEffect(()=>{
        window.addEventListener('resize', throttledResize)

        return ()=>{
        window.removeEventListener('resize', throttledResize)
        }
    },[])

  return (
    // <>
    //     <div>
    //         <div>
    //             <button onClick={()=>setCount1(prev => prev + 1)}>Increase</button>
    //         </div>
    //         <h3>{count1}</h3>
    //         <div>
    //             <h3>Squared Counter : {memoizedValue}</h3>
    //         </div>
    //     </div>
    //     <div>
    //         <div>
    //             <button onClick={()=>setCount2(prev => prev - 1)}>Decrease</button>
    //         </div>
    //         <h3>{count2}</h3>
    //     </div>
    // </>
    // <>
    //     <div>
    //         <div>
    //             <button onClick={()=> setCount1(prev => prev + 1)}>Increase</button>
    //             <h2>{count1}</h2>
    //         </div>
    //         <div>
    //             <button onClick={()=> setCount2(prev => prev + 1)}>Increase</button>
    //             <h2>{count2}</h2>
    //         </div>
    //     </div>
    // </>
    <>
        <h1>{window.innerHeight} X {window.innerWidth}</h1>
    </>
  )
}

export default MainPolyfills