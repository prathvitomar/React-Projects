import React, { useEffect, useState } from "react";

function UnDoablePractice() {
  const [value, setValue] = useState(0);
  const [name, setName] = useState("");
  const [redo, setRedo] = useState(null); 
  const [history, setHistory] = useState([]); 
  const [data, setData] = useState([]); 

  async function fetchData(){
    try {
        const res = await fetch(`https://api.frontendeval.com/fake/food/${name}`)
        const searchData = await res.json();
        setData(searchData)
    } catch (error) {
        console.log("Fetching data failed")
    }
  }

  useEffect(() =>{
    let timer;
    if(name.length > 0){
        timer = setTimeout(() =>{
            fetchData()
        },500)
    }
    return ()=>{
        clearTimeout(timer)
    }
  },[name])

  const handleNumber = (num) => {
    setValue((prev) => prev + num);
    setHistory((prev) => [...prev, num]); 
    setRedo(null); 
  };

  function handleUndo() {
    if (history.length > 0) {
      const lastValue = history[history.length - 1];
      setValue((prev) => prev - lastValue); 
      setRedo(lastValue); 
      setHistory((prev) => prev.slice(0, -1)); 
    }
  }

  function handleRedo() {
    if (redo !== null) {
      setValue((prev) => prev + redo); 
      setHistory((prev) => [...prev, redo]); 
      setRedo(null); 
    }
  }

  return (
    <>
      <div>
        <h1>Undoable Counter</h1>
        <div>
            <input type="text" value={name} onChange={(e)=> setName(e.target.value)}/>
            {
                data.length > 0 && (
                            data.map((item, index)=>(
                                <li key={index}>{item}</li>
                            ))
                )
            }
        </div>
        <div>
          <button onClick={handleUndo}>Undo</button>
          <button onClick={handleRedo}>Redo</button>
        </div>
        <div>
          <div>
            <button onClick={() => handleNumber(-100)}>-100</button>
            <button onClick={() => handleNumber(-10)}>-10</button>
            <button onClick={() => handleNumber(-1)}>-1</button>
          </div>
          <div>
            <h2>{value}</h2>
          </div>
          <div>
            <button onClick={() => handleNumber(1)}>+1</button>
            <button onClick={() => handleNumber(10)}>+10</button>
            <button onClick={() => handleNumber(100)}>+100</button>
          </div>
        </div>
        {history.length > 0 && (
          <ul>
            <h1>History : </h1>
            {history.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}

export default UnDoablePractice;
