import React, { useEffect, useState, useLayoutEffect } from 'react'

function UseLayoutEffectPrac() {
    const ids = [1,2]
    const [id, setId] = useState(ids[0]);
    const [admin, setAdmin] = useState(true);

    let now = performance.now();
    while(performance.now() - now < 200){

    }

    useLayoutEffect(()=>{
        setAdmin(id === ids[0]);
    },[id])

    const handleFunc = () => {
        const otherId = ids.find((userId)=> userId !== id)
        setId(otherId)
    }

    return (
        <>
            <h1>User Id : {id}</h1>
            <h1>Admin : {admin ? 'true' : 'false'}</h1>
            <button type='button' onClick={handleFunc}>Click</button>
        </>
    )
}

export default UseLayoutEffectPrac