import React, { useEffect, useState } from 'react'
import List from './ui/List';
import { Link, useNavigate } from 'react-router-dom';

function MainBreadcrumb() {
    const [data, setData] = useState([]);
    const [selectedId, setSelectedId] = useState("");
    const navigate = useNavigate();

    useEffect(() =>{
        ;(async function(){
            try {
                const apiData = await fetch(`https://dummyjson.com/products?limit=10&skip=10`);
                const data = await apiData.json();
                setData(data.products);
            } catch (error) {
                throw new Error(error.message);
            }
        })()
    },[])
    console.log(data);
    
    function handleId(id){
        setSelectedId(id);
        navigate(`/breadcrumb/${selectedId}`)
    }

  return (
    <>
        <h1>BreadCrumb</h1>
        {
            data.length > 0 && data.map((item) =>(
                    <List handleId={(id)=> handleId(id)} key={item.id} data={item}/>
            ))
        }
    </>
  )
}

export default MainBreadcrumb