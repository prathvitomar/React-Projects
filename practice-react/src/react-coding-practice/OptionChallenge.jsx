import { useEffect, useState } from "react";

export default function Item() {
  const API_ENDPOINT = "https://dummyjson.com/product";
  const [category, setCategory] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");
  const [optionData, setOptionData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(()=>{
    ;(async function(){
      try {
        setLoading(true);
        setError(null);
        const data = await fetch(API_ENDPOINT);
        const res = await data.json();
        console.log(res.products);
        const options = res.products.map(product => product.category);
        setCategory([...new Set(options)])
      } catch (error) {
        setError(error.message);
      }finally{
        setLoading(false);
      }
    })()
  },[])


  useEffect(()=>{
    if(!selectedOption) return;
    ;(async function(){
      try {
        setLoading(true);
        setError(null);
        const data = await fetch(`${API_ENDPOINT}/category/${selectedOption}`);
        const res = await data.json();
        setOptionData(res.products);
      } catch (error) {
        setError(error.message);
      }finally{
        setLoading(false);
      }
    })()
  },[selectedOption])

  function handlePrev(){
    
  }

  function handleNext(){

  }

  if(loading) return (<h1>Loading....</h1>)
  if(error) return (<h1>{error}</h1>)

  return (
    <>
      <select value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)}>
      {
        category.length > 0 && category.map((option, index)=>(
          <option key={index} value={option}>{option}</option>
        ))
      }
      </select>
      {
          optionData.length > 0 && optionData.map((option)=>(
            <div key={option.id}>
              <li>{option.title}</li>
              <p>{option.description}</p>
              <h4>Category : {option.category}</h4>
            </div>
          ))
      }
      <div>
        <button onClick={handlePrev}>Prev</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </>
  )
}
