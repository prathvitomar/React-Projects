import { useEffect, useState } from "react"

export default function Timer({duration}){
    const [miliSeconds, setMiliSeconds] = useState(duration);

    useEffect(() =>{
        if(miliSeconds<=0) return;
        let interval = setInterval(()=>{
            setMiliSeconds(prev => prev - 1000)
        },1000) 
 
        return ()=>{
         clearInterval(interval)
        }
     },[miliSeconds])

    function getTiming(){
        let totalSecond = parseInt(miliSeconds/1000);
        let totalMinutes = parseInt(totalSecond/60);
        let totalHours = parseInt(totalMinutes/60);
        let totalDays = parseInt(totalHours/24);

        let total_seconds = totalSecond%60;
        let total_minutes = totalMinutes%60;
        let total_hours = totalHours%24;
        let total_days = totalHours%24;

        return `Days : ${total_days}, Hours : ${total_hours}, Minutes : ${total_minutes}, Seconds : ${total_seconds}`;
    }

    if(miliSeconds>0){
        return(
            <>
            <div>
                <h1>{getTiming()}</h1>
            </div>
            </>
        )
    }
    else{
        return (
            <><h1>Time's Up.....!!!!!</h1></>
        )
    }
}