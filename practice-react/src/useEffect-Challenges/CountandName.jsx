import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function CountandName() {
  const [name, setName] = useState("");
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `Count : ${count}`
    console.log(name)
  }, [count]);

  return (
    <>
      <div>
        <h1>Count : {count}</h1>
        <button onClick={()=> setCount(prev => prev+1)}>Increase</button>
        <div>
          <h2>{name}</h2>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
      </div>
    </>
  );
}

export default CountandName;
