import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

function Main() {
    const [itemNumber, setItemNumber] = useState(5);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [pageNumber, setPageNumber] = useState(1);
    const itemsNum = [5,10,15,20];

    useEffect(()=>{
        async function fetchData(){
            setLoading(true);
            setError("");
            try {
                const skip = (pageNumber - 1) * itemNumber;
                const resData = await fetch(`https://dummyjson.com/product?limit=${itemNumber}&skip=${skip}`)
                const res = await resData.json();
                setData(res.products);
                setLoading(false);
            } catch (error) {
                setLoading(false);
                setError(error.message || "Something went wrong"); 
                setPageNumber(1);
            }
        }
        fetchData()
    },[itemNumber, pageNumber]);

    function handleItems(event){
        setItemNumber(event.target.value)
    }

    function handlePrev(){
        setPageNumber(prev => prev - 1);
    }

    function handleNext(){
        setPageNumber(prev => prev + 1);
    }

    if (loading) return <h2>Loading....</h2>
    if (error) return <h2>{error}</h2>

    console.log(data);

  return (
    <>
        <div>
            <div>
                <select value={itemNumber} onChange={handleItems}>
                    {
                        itemsNum.map((num)=>(
                            <option key={num} value={num}>{num}</option>
                        ))
                    }
                </select>
                <h1>All Products</h1>
                {
                    data?.length > 0 && data.map((item) =>(
                        <li key={item.id}>{item.title}</li>
                    ))
                }
            </div>
            <div>
                <button disabled={pageNumber==1} onClick={handlePrev}>Prev</button>
                <button onClick={handleNext}>Next</button>
            </div>
        </div>
    </>
  )
}

export default Main




// https://dummyjson.com/product?limit=${itemNumber}&skip=${skip}