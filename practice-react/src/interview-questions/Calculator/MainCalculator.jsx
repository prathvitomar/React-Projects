import { useState } from "react";
import "./styles.css";

export default function MainCalculator() {
  const allNums = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "+",
    "-",
    "/",
    "*",
    "=",
    "C",
    ".",
  ];
  const [result, setResult] = useState("");

  function handleClick(e) {
    const id = e.target.id;
    const value = e.target.value;
    if (id === "=") {
      handleSubmit();
    } else if (id === "C") {
      setResult("");
    } else {
      setResult((prev) => prev + id);
    }
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      handleSubmit();
    }
  }

  function handleSubmit() {
    const ans = eval(result).toString();
    setResult(ans);
  }

  return (
    <div className="App">
      <div>
        <div>
          <input
            type="text"
            value={result}
            onKeyDown={handleKeyDown}
            onChange={(e) => setResult(e.target.value)}
          />
          <div className="grids">
            {allNums.map((item, idx) => (
              <button
                className="cell"
                key={idx}
                id={item}
                onClick={handleClick}
                onKeyDown={handleKeyDown}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
