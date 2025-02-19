import React, { useEffect, useState } from 'react'
import "../styles.css"
function MainShoppingList() {
    const [search, setSearch] = useState("");
    const [data, setData] = useState([]);
    const [selected, setSelected] = useState([]);

    useEffect(() =>{
        if(search.length<= 2) return;
        ;(async function () {
            try {
                const apiData = await fetch(`https://api.frontendeval.com/fake/food/${search}`);
                const res = await apiData.json();
                setData(res);
            } catch (error) {
                console.log(error.message);
            }
        })()
    },[search])

    function handleCheckbox(e){
        const {name, checked} = e.target;
        setSelected(prev => checked ? [...prev, name] : prev.filter(item => item !== name));
        console.log(selected);
    }

    function handleDelete(item){
        setData(prev => prev.filter(i => i !== item))
    }

  return (
    <>
        <div>
            <input type="text" value={search} onChange={(e)=> setSearch(e.target.value)}/>
            <div>
            {
                data.length > 0 && data.map((item, index)=>(
                    <div style={{
                        display : 'flex',
                        alignItems : 'center',
                    }} key={index} className={`${selected.includes(item) ? "included" : ""}`}>
                        <input type="checkbox" name={item} value={item} onChange={handleCheckbox}/>
                        <li key={index}>{item}</li>
                        <button disabled={selected.includes(item)} onClick={() => handleDelete(item)}>X</button>
                    </div>
                ))
            }
            </div>
        </div>
    </>
  )
}

export default MainShoppingList