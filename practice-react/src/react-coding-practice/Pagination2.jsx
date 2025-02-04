import React, { useEffect, useState } from 'react'

function Pagination2() {
    const API_ENDPOINT = "https://dummyjson.com/products"
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [products, setProducts] = useState([]);
    const [skip, setSkip] = useState(10);
    
    useEffect(()=>{
        ;(async function (){
            try {
                setLoading(true);
                setError(null);
                let limit = 10;
                const data = await fetch(`${API_ENDPOINT}/?limit=${limit}&skip=${skip}`)
                const res = await data.json();
                setProducts(res.products);
            } catch (error) {
                setError(error.message)
            } finally {
                setLoading(false);
            }
        })()
    },[skip])

    function handlePrev(){
        setSkip(prev => prev - 10);
    }

    function handleNext(){
        setSkip(prev => prev + 10);
    }

    if (loading) return (<h1>Loading...</h1>)
    if (error) return (<h1>{error}</h1>)

  return(
    <>
        {
            products.length > 0 && products.map((product) =>(
                <div key={product.id}>
                    <h1>{product.title}</h1>
                    <p>{product.description}</p>
                </div>
            ))
        }
        <button disabled={skip === 10} onClick={handlePrev}>Prev</button>
        <button onClick={handleNext}>Next</button>
    </>
  )
}

export default Pagination2