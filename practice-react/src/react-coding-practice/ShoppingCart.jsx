import React, { useEffect, useState } from "react";

function ShoppingCart() {
  const [input, setInput] = useState("");
  const [debounce, setDounce] = useState("");
  const [searchData, setSearchData] = useState([]);
  const [shoppingItem, setShoppingItem] = useState([]);
  const [selectedItem, setSelectedItem] = useState([]);

  useEffect(() => {
    let timer = setTimeout(() => {
      setDounce(input);
    }, 500);
    return () => clearTimeout(timer);
  }, [input]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(
          `https://api.frontendeval.com/fake/food/${debounce}`
        );
        const data = await res.json();
        setSearchData(data);
        console.log(data);
      } catch (error) {
        console.log("Failed to fetch data");
      }
    }
    fetchData();
  }, [debounce]);

  function addItem(item) {
    setShoppingItem(prev => [...prev, item])
  }

  function toggleItem(item){
    setSelectedItem(prev => prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item])
  }

  function deleteItem(item){
    if(selectedItem.includes(item)){
        setSelectedItem(prev => prev.filter(i => i !== item))
        setShoppingItem(prev => prev.filter(i => i !== item))
    }
  }

  return (
    <>
      <div>
        <div>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
        {searchData.length > 0 &&
          searchData.map((item, index) => (
            <div
              key={index}
              style={{
                cursor: "pointer",
              }}
            >
              <li onClick={() => addItem(item)}>{item}</li>
            </div>
          ))}

          <div>
            {
                shoppingItem.length > 0 && shoppingItem.map((item, index)=>(
                    <div key={index} style={{
                        display: 'flex',
                        justifyContent : 'center',
                    }}>
                        <input type="checkbox" onChange={()=> toggleItem(item)}/>
                        <h3>{item}</h3>
                        <button disabled={!selectedItem.includes(item)} onClick={()=> deleteItem(item)}>Delete</button>
                    </div>
                ))
            }
          </div>
      </div>
    </>
  );
}

export default ShoppingCart;
