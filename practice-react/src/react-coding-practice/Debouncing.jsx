// import React, { useEffect, useState } from 'react'

// function Debouncing() {
//     const [data, setData] = useState("");

//     useEffect(()=>{
//         let debouncing = setTimeout(()=>{
//             fetch(`https://api.postalpincode.in/pincode/${data}`)
//             .then((res)=> res.json())
//             .then((res)=> console.log(res))
//             .catch((err)=> console.log(err))
//         },2000)

//         return ()=> {
//             clearTimeout(debouncing)
//         }
//         },[data])

//     return (
//         <>
//         <input type="text" value={data} onChange={(e)=> setData(e.target.value)}/>
//         </>
//     )
// }

// export default Debouncing





import React, { useState, useEffect } from "react";

function Debouncing() {
  const [input, setInput] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    const timer = setTimeout(async () => {
      if (input.trim()) { // Only fetch if input is not empty
        try {
          const allData = await fetch(
            `http://universities.hipolabs.com/search?country=${input}`
          );
          const res = await allData.json();
          setData(res);
        } catch (error) {
          console.error("Error fetching universities:", error);
          setData([]);
        }
      } else {
        setData([]); // Clear data if input is empty
      }
    }, 1000);

    // Cleanup function to clear the timeout
    return () => {
      clearTimeout(timer);
    };
  }, [input]);

  return (
    <div>
      <h1>Search Universities by Country</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter country name..."
      />
      <div>
        <h2>All Universities:</h2>
        {data.length > 0 ? (
          <ul>
            {data.map((university, index) => (
              <li key={index}>{university.name}</li>
            ))}
          </ul>
        ) : (
          input.trim() && <p>No universities found.</p>
        )}
      </div>
    </div>
  );
}

export default Debouncing;
