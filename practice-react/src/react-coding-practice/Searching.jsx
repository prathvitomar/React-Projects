// import React, { useEffect } from 'react'
// import { useState } from 'react'

// function Searching() {
//     const data = ['mango', 'milkshake', 'manvswild', 'mangowala']
//     const [search, setSearch] = useState("");
//     const [searchedItem, setSearchItem] = useState(data);
//     const handleSearch = () => {
//         if(search === ""){
//             setSearchItem(data)
//         }
//         else{
//             setSearchItem(data.filter(item => item.toLowerCase().includes(search.toLowerCase())))
//         }
//     }

//     useEffect(() =>{
//         handleSearch()
//     },[search])


//   return (
//     <>
//     <input type="text" value={search} onChange={(e)=> setSearch(e.target.value)}/>
//     {
//         searchedItem.length > 0 && (
//             searchedItem.map((item, index)=>(
//                 <div key={index}>
//                     <li style={{
//                         fontWeight: 'bold'
//                     }}>{item}</li>
//                 </div>
//             ))
//         )
//     }
//     </>
//   )
// }

// export default Searching










import React, { useEffect, useState } from 'react'

function Searching() {
    const allData = ["america", "india", "europe", "portuguese", "romanian"]
    const [searching, setSearching] = useState("");
    const [searchedCountry, setSearchedCountry] = useState([]);

    useEffect(()=>{
        let timer = setTimeout(()=>{
            handleFilter()
        },1000)

        return (()=> clearTimeout(timer))
    },[searching])

    function handleFilter(){
        setSearchedCountry(allData.filter(item => item.toLowerCase().includes(searching.toLowerCase())));
    }

  return (
    <>
        <h1>Searching</h1>
        <input type="text" value={searching} onChange={(e)=> setSearching(e.target.value)}/>
        {
            searchedCountry.length > 0 ? (
                searchedCountry.map((item,i)=>(
                    <ul key={i}>
                        <li>{item}</li>
                    </ul>
                ))
            ) : null
        }
    </>
  )
}

export default Searching