import { useEffect } from "react";
import { useState } from "react"

export default function Main(){
    const names = ['naman', 'kriti', 'umesh', 'samar', 'uday', 'manish', 'mohan', 'pradeep', 'yogesh']
    const [searchInput, setSearchInput] = useState("");
    const [searched, setSearched] = useState([]);

    useEffect(()=>{
        let search = names.filter((name)=> name.includes(searchInput));
        setSearched(search);
    },[searchInput])

    return (
        <>
            <div>
                <input type="text" value={searchInput} onChange={(e)=> setSearchInput(e.target.value)} />
            </div>
            {
                searched.length>0 && searched.map((search, index)=>(
                    <li key={index}>{search}</li>
                ))
            }
        </>
    )
}