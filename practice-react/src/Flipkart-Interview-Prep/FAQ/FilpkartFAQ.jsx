import React, { useState } from 'react'

function FilpkartFAQ() {
    const [ids, setIds] = useState([]);
    const [mode, setMode] = useState(true);
    const data = [
        {
          question: "How many bones does a cat have?",
          answer: "A cat has 230 bones - 6 more than a human",
        },
        {
          question: "How much do cats sleep?",
          answer: "The average cat sleeps 12-16 hours per day",
        },
        {
          question: "How long do cats live",
          answer: "Outdoor cats live 5 years on average. Indoor\ncats live 15 years on average.",
        },
      ]

      function handleClick(e,i){
        if(mode){
            if(ids.includes(i)){
                let newIds = ids.filter((id)=> id!==i);
                setIds(newIds);
            }
            else{
                setIds(prev => [...prev, i]);
            }
        }
        else{
            if(ids.includes(i)){
                setIds([]);
            }
            else{
                setIds([i]);
            }
        }
      }

  return (
    <>
        <div>
            <div>
                {
                    data.map((item, i)=>(
                        <div style={{display: 'flex', flexWrap : 'wrap', width:'200px', height :'auto' , border : '1px solid black'}} key={i} onClick={(e) => handleClick(e,i)}>
                            <h3>{item.question}</h3>
                            {
                                ids.includes(i) && (<div>{item.answer}</div>)
                            }
                        </div>
                    ))
                }
            </div>
            <div>
                <button onClick={()=> setMode(!mode)}>{mode ? "Switch to Single FAQ open" : "Switch to Multiple FAQ open"}</button>
            </div>
        </div>
    </>
  )
}

export default FilpkartFAQ