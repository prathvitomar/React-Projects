import { useState } from "react";
import { useEffect } from "react";

export default function MainDropdown() {
  // https://dummyjson.com/products/category-list
  // https://dummyjson.com/products/category/smartphones

  const [data, setData] = useState([])
  const [options, setOptions] = useState([])
  const [selectedOption, setSelectedOption] = useState("")

    useEffect(()=>{
        if(!options) return;
        ;(async function () {
            try {
                const res = await fetch("https://dummyjson.com/products/category-list");
                const apiData = await res.json();
                console.log(apiData)
                setOptions(apiData);
            } catch (error) {
                console.log(error.message)
            }
        })()
    },[])

    useEffect(()=>{
        if(!selectedOption) return;
        ;(async function () {
            try {
                const res = await fetch(`https://dummyjson.com/products/category/${selectedOption}`);
                const apiData = await res.json();
                console.log(apiData)
                setData(apiData.products)
            } catch (error) {
                console.log(error.message)
            }
        })()
    },[selectedOption])


  return (
    <>
    <div>
            {
                options.length > 0 && (
                    <div>
                        <select value={selectedOption} onChange={(e)=>setSelectedOption(e.target.value)}>
                            {
                                options.map(option=>(
                                    <option value={option} key={option}>{option}</option>
                                ))
                            }
                        </select>
                    </div>
                )
            }
            {
                data.length > 0 && data.map(product=>(
                    <li key={product.id}>
                        {product.title}
                    </li>
                ))
            }
    </div>
    </>
  )

}
