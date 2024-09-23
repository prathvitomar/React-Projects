import React, { useEffect, useState } from 'react'

function Debouncing() {
    const [data, setData] = useState("");

    useEffect(()=>{
        let debouncing = setTimeout(()=>{
            fetch(`https://api.postalpincode.in/pincode/${data}`)
            .then((res)=> res.json())
            .then((res)=> console.log(res))
            .catch((err)=> console.log(err))
        },2000)

        return ()=> {
            clearTimeout(debouncing)
        }
        

        },[data])

    return (
        <>
        <input type="text" value={data} onChange={(e)=> setData(e.target.value)}/>
        </>
    )
}

export default Debouncing