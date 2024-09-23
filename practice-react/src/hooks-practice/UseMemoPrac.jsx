import React, {useState, useMemo} from 'react'

function UseMemoPrac() {
    const [count, setCount] = useState(0);
    const mutlipyedVal = useMemo(()=>{
        multiplyCount()
    },[])

    function multiplyCount(){
        for(let i=0; i<10000; i++){
            setCount(prev => prev + i);
            console.log(count)
        }
    }


    return (
        <>
            <h1>Count : {count}</h1>
            <button type='button' onClick={multiplyCount}>Increase</button>
        </>
    )
}

export default UseMemoPrac