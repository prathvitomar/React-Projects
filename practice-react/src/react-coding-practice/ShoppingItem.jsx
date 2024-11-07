import React, { useEffect, useState } from 'react';

function ShoppingItem() {
    const [input, setInput] = useState("");
    const [debounced, setBounced] = useState(input);
    const [searchData, setSearchData] = useState([]);
    const [shoppingItem, setShoppingItem] = useState([]);
    const [selectedItems, setSelectedItems] = useState([]);

    async function fetchData(){
        try {
            const data = await fetch(`https://api.frontendeval.com/fake/food/${debounced}`);
            const response = await data.json();
            setSearchData(response);
            console.log("Made API call")
        } catch (error) {
            console.log('Failed to fetch data');
        }
    }

    useEffect(()=>{
        let timer = setTimeout(()=>{
            setBounced(input)
        },500)
        return (()=> clearInterval(timer))
    },[input])

    useEffect(()=>{
        if (debounced) fetchData();
    }, [debounced]);

    function addToItem(item){
        setShoppingItem(prev => [...prev, item]);
    }

    function removeFromItem(item){
        if (selectedItems.includes(item)) {
            setShoppingItem(prev => prev.filter(prevItem => prevItem !== item));
            setSelectedItems(prev => prev.filter(selectedItem => selectedItem !== item));
        }
    }

    function handleSelected(item){
        setSelectedItems(prev => 
            prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item]
        );
    }

    return (
        <>
            <div>
                <div>
                    <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
                </div>
                {searchData.length > 0 ? (
                    searchData.map((item, index) => (
                        <li onClick={() => addToItem(item)} key={index}>{item}</li>
                    ))
                ) : null}

                <div>
                    <h1>Shopping List</h1>
                    {shoppingItem.map((item, index) => (
                        <div key={index}>
                            <input 
                                type="checkbox" 
                                checked={selectedItems.includes(item)} 
                                onChange={() => handleSelected(item)} 
                            />
                            <h1>{item}</h1>
                            <button 
                                onClick={() => removeFromItem(item)} 
                                disabled={!selectedItems.includes(item)} 
                            >
                                Delete
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default ShoppingItem;
