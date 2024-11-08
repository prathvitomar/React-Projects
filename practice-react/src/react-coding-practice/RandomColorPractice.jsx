import React, { useState } from 'react'

function RandomColorPractice() {
  const [colorName, setColorName] = useState("")
  const [colorCode, setColorCode] = useState("")

  function handleColor(code){
    if(code === "RGB"){
      setColorName("RGB")
      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);
      setColorCode(`rgb(${r}, ${g}, ${b})`);
    }
    else if(code === "HEX"){
      setColorName("HEX")
      const randomNumber = Math.floor(Math.random() * 16777216);
      const hexString = randomNumber.toString(16).padStart(6, '0');
      setColorCode(`#${hexString}`)
    }
  }

  return (
    <>
        <div style={{
          backgroundColor : `${colorCode} `
        }}>
            <div>
                <button onClick={()=> handleColor("HEX")}>Create HEX Color</button>
                <button onClick={()=> handleColor("RGB")}>Create RGB Color</button>
                <button onClick={()=> handleColor(colorName)}>Create Random Color</button>
            </div>
            <div>
              <h1>{colorName ? colorName : "No"} Color</h1>
              <h1>{colorCode}</h1>
            </div>
        </div>
    </>
  )
}

export default RandomColorPractice