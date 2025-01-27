import React, { useState } from 'react'

const useFetch = ({url}) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  async function fetchData() {
    try {
      setLoading(true)
      setError('');
      const apiData = await fetch(url)
      const res = await apiData.json();
      setData(res);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error.message);    
    }
  }
  fetchData();
  return [data, error, loading];
}

function UseFetch2() {
  const {data, error, loading} = useFetch(`https://dummyjson.com/products`)
  if(loading) return <h1>Loading...</h1>
  if(error) return <h1>{error}</h1>
  return (
    <>
      <ul>
        {
          data.products.length > 0 && data.products.map((item)=>(
            <li key={item.id}>{item.title}</li>
          ))
        }
      </ul>
    </>
  )
}

export default UseFetch2