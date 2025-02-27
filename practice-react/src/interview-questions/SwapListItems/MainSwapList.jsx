import React, { useState } from 'react'

function MainSwapList() {
    const [arr1, setArr1] = useState(["Prathvi", "Gappu", "PrathviRaj"]);
    const [arr2, setArr2] = useState(["Garima", "Riya", "Rebeca"]);
    const [indices1, setIndices1] = useState([]);
    const [indices2, setIndices2] = useState([]);

    function handleChange(index){
        setIndices1(prev => prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]);
    }

    function handleChange2(index){
        setIndices2(prev => prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]);
    }

    function swap(){
        if(indices1.length !== indices2.length){
        alert("Select equal number of items from each list");
        return;
        }
        const newArr1 = [...arr1];
        const newArr2 = [...arr2];

        if(indices1.length === indices2.length){
            for(let i = 0; i < indices1.length; i++){
                let temp = newArr1[indices1[i]];
                newArr1[indices1[i]] = newArr2[indices2[i]];
                newArr2[indices2[i]] = temp;
            }
        }
        setArr1(newArr1);
        setArr2(newArr2);
        setIndices1([]);
        setIndices2([]);
    }


  return (
    <>
        <div>
            <div >
                <h1>List 1 </h1>
                {
                    arr1.length > 0 && arr1.map((item, index) => (
                        <div style={{ display : 'flex'}} key={index}>
                            <li>{item}</li>
                            <input type="checkbox" onChange={()=> handleChange(index)} checked={indices1.includes(index)}/>
                        </div>
                    ))
                }
            </div>
            <div>
                <h1>List 2 </h1>
                {
                    arr2.length > 0 && arr2.map((item, index) => (
                        <div style={{ display : 'flex'}} key={index}>
                            <li>{item}</li>
                            <input type="checkbox" onChange={()=> handleChange2(index)} checked={indices2.includes(index)}/>
                        </div>
                    ))
                }
            </div>
            <div>
                <button disabled={indices1.length === 0 || indices2.length === 0 ||indices1.length !== indices2.length} onClick={swap}>Swap Items</button>
            </div>
        </div>
    </>
  )
}

export default MainSwapList