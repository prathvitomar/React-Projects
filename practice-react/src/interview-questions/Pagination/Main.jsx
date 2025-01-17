import React, { useEffect, useState } from 'react'

function Main() {
    const [itemNumber, setItemNumber] = useState(5);
    const [pageNumber, setPageNumber] = useState(1);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    useEffect(() =>{
        async function fetchData() {
            try {
                setError("");
                setLoading(true);
                const skip = (pageNumber - 1)* itemNumber;
                const data = await fetch(`https://dummyjson.com/product?limit=${itemNumber}&skip=${skip}`)
                const res = await data.json();
                if(!res.products) return setError("No Product found")
                setProducts(res.products);
                setLoading(false);
            } catch (error) {
                setError(error.message || 'Something went wrong');
                setPageNumber(1);
                setLoading(false);            
            }
        }
        fetchData();
    },[pageNumber, itemNumber])

    function handlePrev(){
        if(pageNumber == 1) return;

        // setPageNumber(prev => prev - 1);
    }

    function handleNext(){
        setPageNumber(prev => prev + 1);
    }

    function handleItemNum(event){
        setItemNumber(Number(event.target.value));
        setPageNumber(1);
    }

    
    if (loading) return (<h1>.....Loading</h1>)
        // if (error) return (<h1>{error}</h1>)

    console.log(products);

  return (
    <>
    <div>
        <h1>All Products</h1>
        <label htmlFor="">Select Numbers of Items You wanna see</label>
        <select value={itemNumber} onChange={handleItemNum}>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
        </select>
        {
            products.length > 0 && products.map(product =>(
                <div key={product.id}>
                    <li>{product.title}</li>
                </div>
            ))
        }
    </div>
    <div>
        <button onClick={handlePrev} disabled={pageNumber == 1}>Prev</button>
        <button onClick={handleNext}>Next</button>
    </div>
    </>
  )
}

export default Main