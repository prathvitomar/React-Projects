import React, { useEffect, useState } from 'react'

function AutoSearch() {
    // FOR ASYNC SEARCHING :

    // async function fetchData() {
    //     try {
    //         const res = await fetch(`https://dummyjson.com/users`)
    //         const resData = await res.json()
    //         setData(resData.users)
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }
    // useEffect(() =>{
    //     fetchData();
    // },[])

    const [search, setSearch] = useState("");
    const [data, setData] = useState(['mango','lion', 'search', 'delete', 'fetch', 'replace', 'prefetch']);
    const [searchData, setSearchData] = useState([]);

    const filterData = () =>{
        if(search !== ""){
            let filtering = data.filter(item => item.toLowerCase().includes(search.toLowerCase()))
            setSearchData(filtering);
        }
    }

    useEffect(() =>{
        filterData();
    },[search])


  return (
    <>
    <div>
        <input type="text" value={search} onChange={(e)=> setSearch(e.target.value)}/>
        {
            searchData.length > 0 ? (
                <ul>
                    {
                        searchData.map((item, index)=>(
                            <li key={index}>{item}</li>
                        ))
                    }
                </ul>
            ) : null
        }
    </div>
    </>
  )
}

export default AutoSearch