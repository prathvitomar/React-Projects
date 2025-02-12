// https://api.openweathermap.org/data/2.5/weather?q=mumbai&appid=e34b4c51d8c2b7bf48d5217fe52ff79e

import { useEffect } from "react";
import { useState } from "react"
import Weather from "./components/Weather";

export default function MainWeather(){
    const [input, setInput] = useState("");
    const [data, setData] = useState([]);

    useEffect(() =>{
        if(input === "") return;
        let timeOut = setTimeout(
            async function () {
            try {
                const apiData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=e34b4c51d8c2b7bf48d5217fe52ff79e`)
                const res = await apiData.json();
                // console.log(res)
                setData(res);
            } catch (error) {
                console.log(error.message);
            }
        },1000)

        return ()=>{
            clearTimeout(timeOut);
        }
    },[input])

    console.log(data);

    return (
        <>
        <div>
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)}/>
            {data && <Weather data={data} />}
        </div>
        </>
    )

}