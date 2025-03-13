import React, { useState } from "react";
import "./styles.css";
function FlipkartUndoableCounter() {
  const [currentValue, setCurrentValue] = useState(0);
  const [history, setHistory] = useState([]);
  const [redo, setRedo] = useState([]);

  function handleClick(value) {
    // -1 (108 -> 107);
    // value (lastValue -> (currentValue))
    let lastValue = currentValue + value;
    handleHistory(value, currentValue, lastValue);
    setCurrentValue((prev) => prev + value);
  }

  function handleHistory(operation, prevValue, currentValue) {
    setHistory((prev) => [...prev, [operation, prevValue, currentValue]]);
  }

  function handleUndo(){
    let lastHistory = history[history.length - 1];
    setRedo(prev=> [...prev, lastHistory]);
    setHistory(prev=> prev.filter((i)=> i !== lastHistory));
  }

  function handleRedo(){
    let lastRedo = redo[redo.length - 1];
    setHistory(prev=> [...prev, lastRedo]);
    setRedo(prev=> prev.filter((i)=> i !== lastRedo));
  }

  return (
    <>
      <div>
        <div
          className="center"
          style={{
            flexDirection: "column",
          }}
        >
          <h1>UnDoable Counter</h1>
          <div>
            <button disabled={history.length === 0} onClick={handleUndo}>Undo</button>
            <button disabled={redo.length === 0} onClick={handleRedo}>Redo</button>
          </div>
        </div>
        <div className="center">
          <div>
            <button onClick={() => handleClick(-100)}>-100</button>
            <button onClick={() => handleClick(-10)}>-10</button>
            <button onClick={() => handleClick(-1)}>-1</button>
          </div>
          <div>
            <h3>{currentValue}</h3>
          </div>
          <div>
            <button onClick={() => handleClick(+100)}>100</button>
            <button onClick={() => handleClick(10)}>10</button>
            <button onClick={() => handleClick(1)}>1</button>
          </div>
        </div>
        {history.length > 0 && (
          <div className="history">
            <h2>History</h2>
            {history.map((item, i) => (
              <ul>
                {item[0]} : ({item[1]} {"->"} {item[2]})
              </ul>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default FlipkartUndoableCounter;
