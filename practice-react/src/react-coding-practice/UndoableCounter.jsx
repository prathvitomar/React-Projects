import React, { useState } from "react";

function UndoableCounter() {
  const [value, setValue] = useState(0);
  const [history, setHistory] = useState([]);
  const [redoHistory, setRedoHistory] = useState([]);

  function addValue(amount) {
    setValue(prev => prev + amount);
    setHistory(prevHistory => [...prevHistory, amount]);
    setRedoHistory([]); 
  }

  function undo() {
    if (history.length === 0) {
      alert('Nothing to Undo');
      return;
    }
    const lastAction = history[history.length - 1];
    setHistory(prevHistory => prevHistory.slice(0, -1));
    setValue(prev => prev - lastAction);
    setRedoHistory(prevRedo => [lastAction, ...prevRedo]);
  }

  function redo() {
    if (redoHistory.length === 0) {
      alert('Nothing to Redo');
      return;
    }
    const redoAction = redoHistory[0];
    setRedoHistory(prevRedo => prevRedo.slice(1));
    setValue(prev => prev + redoAction);
    setHistory(prevHistory => [...prevHistory, redoAction]);
  }

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div>
          <label>Undoable Counter</label>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <button onClick={undo}>Undo</button>
            <button onClick={redo}>Redo</button>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              <button onClick={() => addValue(-100)}>-100</button>
              <button onClick={() => addValue(-10)}>-10</button>
              <button onClick={() => addValue(-1)}>-1</button>
            </div>
            <div>
              <h1>{value}</h1>
            </div>
            <div>
              <button onClick={() => addValue(1)}>+1</button>
              <button onClick={() => addValue(10)}>+10</button>
              <button onClick={() => addValue(100)}>+100</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UndoableCounter;
