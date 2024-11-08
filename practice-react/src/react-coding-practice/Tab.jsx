import React, { useState } from "react";

function Tab() {
  const data = [
    {
      title: "Tab 1",
      content: <h2>This is Tab 1</h2>,
    },
    {
      title: "Tab 2",
      content: "This is Tab 2",
    },
    {
      title: "Tab 3",
      content: <p>Tab 3</p>,
    },
  ];

  const [ids, setIds] = useState([]);
  function handleIds(id){
    setIds(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev,id])
  }

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        {data.length > 0
          ? data.map((item, index) => (
              <div
                key={index}
                style={{
                  height: "200px",
                  width: "200px",
                  border: "1px solid black",
                  cursor: "pointer"
                }}
                onClick={()=>handleIds(index)}
              >
                <h1>{item.title}</h1>
                {
                    ids.includes(index) ? (<div>{item.content}</div>) : null
                }
              </div>
            ))
          : null}
      </div>
    </>
  );
}

export default Tab;
