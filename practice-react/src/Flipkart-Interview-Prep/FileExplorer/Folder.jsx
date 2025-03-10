import React, { useState } from "react";
import "./styles.css";

function Folder({ data, handleSubmit }) {
  const [expand, setExpand] = useState(false);
  const [text, setText] = useState("");
  const [inputField, setInputField] = useState({
    visible : false,
    isFolder : null
  })

  function handleFiles(e, isFolder){
    e.stopPropagation()
    setInputField({
      visible:true,
      isFolder
    })
  }


  function handleAdd(e){
    if(e.keyCode === 13 && text){
      handleSubmit(data.id, text, inputField.isFolder);
      setInputField({
        ...inputField,
        visible:false
      })
      setText("");
    }
  }

  if (data.isFolder) {
    return (
      <>
        <div className="files">
          <div className="files_" onClick={()=> setExpand(!expand)}>
            <span>{data.name}</span>
            <div>
            <button onClick={(e) => handleFiles(e, true)}>Folder+</button>
            <button onClick={(e) => handleFiles(e, false)}>File+</button>
            </div>
          </div>

          {
            inputField.visible && (
            <div style={{ marginLeft: "10px" }}>
              <span>{inputField.isFolder ? "📂" : "📄"}</span>
              <input type="text" value={text} onChange={(e) => setText(e.target.value)} onKeyDown={handleAdd} autoFocus onBlur={()=> setInputField({...inputField, visible : false})}/>
            </div>
            )
          }

          {expand && (
            <div>
              {data.items.map((item, i) => (
                <div style={{ marginLeft: "10px" }} key={i}>
                  <Folder data={item} handleSubmit={handleSubmit}/>
                </div>
              ))}
            </div>
          )}
        </div>
      </>
    );
  } else {
    return (
      <div>
        <span>{data.name}</span>
      </div>
    );
  }
}

export default Folder;
