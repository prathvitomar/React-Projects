import React, { useState, useMemo, useEffect } from "react";
import data from "./data";

function UseMemoPrac() {
    const [count, setCount] = useState(0);
    const [items] = useState(data);
    const itemSelected = useMemo(()=>{
        items.find(item => {
            console.log(item)
            item === 11000
        });
    },[items])

    // console.log(itemSelected)

  return (
    <>
      <h1>Count : {count}</h1>
      <h1>Items Selected : {itemSelected}</h1>
      <button type="button" onClick={() => setCount((prev) => prev + 1)}>
        Increase
      </button>
    </>
  );
}

export default UseMemoPrac;
