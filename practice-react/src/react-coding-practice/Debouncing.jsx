import React, { useEffect, useState } from 'react'

function Debouncing() {
    const [pin, setPin] = useState("");
    useEffect(()=>{
        let debouncing = setTimeout(()=>{
            fetch(`https://api.postalpincode.in/pincode/${pin}`)
            .then((res)=> res.json())
            .then((data)=> console.log(data[0].Postoffice))
            .catch((err)=> console.log(err))
        },3000)

        return ()=>{
            clearTimeout(debouncing);
        }
    },[pin])

    return (
        <>
            <input type="text" value={pin} onChange={(e)=> setPin(e.target.value)} />
            {/* <button type='button' onClick={debouncing}></button> */}
        </>
    )
}

export default Debouncing