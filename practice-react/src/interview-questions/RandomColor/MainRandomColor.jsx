import { useState } from "react";
import "../styles.css";
export default function MainRandomColor() {

  const [color, setColor] = useState("");
  const [colorCode, setColorCode] = useState(true);

  function handleRandomColor() {
    if (colorCode) {
        //      HEX - #03fc5e
      let chars = "abcdef1234567890";
      let result = "#";
      for (let i = 0; i < 6; i++) {
        result += chars[Math.floor(Math.random() * chars.length)];
      }
      console.log(result);
      return setColor(result);
    } 
    else {
        //     RGB - rgb(252, 252,252)
      const colorRes = `rgb(${Math.floor(Math.random() * 100)},${Math.floor(
        Math.random() * 100
      )},${Math.floor(Math.random() * 100)})`;
      console.log(colorRes);
      return setColor(colorRes);
    }
  }

  return (
    <>
      <h1>Random Color Generator</h1>
      <div
        className="main-div"
        style={{
          backgroundColor: color,
        }}
      >
        <div>
          <button onClick={() => setColorCode(true)}>HEX Color</button>
          <button onClick={() => setColorCode(false)}>RGB Color</button>
          <button onClick={handleRandomColor}>Generate Random Color</button>
        </div>
        <h1>{color}</h1>
      </div>
    </>
  );
}
