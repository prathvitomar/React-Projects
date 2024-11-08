import React, { useEffect } from 'react'
import { useState } from 'react'

function Searching() {
    const data = ['mango', 'milkshake', 'manvswild', 'mangowala']
    const [search, setSearch] = useState("");
    const [searchedItem, setSearchItem] = useState(data);
    const handleSearch = () => {
        if(search === ""){
            setSearchItem(data)
        }
        else{
            setSearchItem(data.filter(item => item.toLowerCase().includes(search.toLowerCase())))
        }
    }

    useEffect(() =>{
        handleSearch()
    },[search])


  return (
    <>
    <input type="text" value={search} onChange={(e)=> setSearch(e.target.value)}/>
    {
        searchedItem.length > 0 && (
            searchedItem.map((item, index)=>(
                <div key={index}>
                    <li style={{
                        fontWeight: 'bold'
                    }}>{item}</li>
                </div>
            ))
        )
    }
    </>
  )
}

export default Searching