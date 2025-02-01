import React, { useEffect, useState } from 'react'

function AutoSearch() {
    const data = ['name', 'earth','latitude', 'longitude', 'laptops', 'american','indian','alexanderson', 'nersager'];
    const [search, setSearch] = useState("");
    const [searchedData, setSearchedData] = useState([]);

    function handleInput(){
        const filteredData = data.filter(item => item.includes(search));
        setSearchedData(filteredData);
    }

    useEffect(()=>{
        let timer = setTimeout(()=>{
            handleInput();
        },1000)

        return ()=>{
            clearTimeout(timer);
        }
    },[search])

  return (
    <>
        <input type="text" value={search} onChange={(e)=> setSearch(e.target.value)}/>
        {
            searchedData.map((data, index) =>(
                <ul key={index}>
                    <li>{data}</li>
                </ul>
            ))
        }
    </>
  )
}

export default AutoSearch