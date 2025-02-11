import { useEffect } from "react";
import { useState } from "react"

export default function MainDebounce(){
    const [input, setInput] = useState("");
    const [data, setData] = useState([]);

    useEffect(()=>{
        if(input.length === 0) return;
        let interval = setTimeout(()=>{
            ;(async function(){
                try {
                    const res = await fetch(`https://dummyjson.com/products/search?q=${input}`);
                    const apiData = await res.json();
                    setData(apiData.products);
                    console.log(apiData.products);
                } catch (error) {
                    console.log(error.message);
                }
            })()
        },1000)

        return () => {
            clearTimeout(interval)
        }
    },[input])

    console.log(data);


    return (
        <>
            <div>
                <input type="text" value={input} onChange={(e)=>setInput(e.target.value)}/>
            </div>
            {
                data.length > 0 && data.map((product)=>(
                    <li key={product.id}>{product.title}</li>
                ))
            }
        </>
    )
}