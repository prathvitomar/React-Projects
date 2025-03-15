import React, { useEffect, useRef, useState } from "react";

function FlipkartSelectableGrid({ cols = 10, rows = 10 }) {
  const [start, setStart] = useState(0);
  const [selectedGrids, setSelectedGrids] = useState([]);
  const gridRef = useRef(null);

  useEffect(() => {
    function handleMouseClick(e) {
      if (gridRef.current && !gridRef.current.contains(e.target)) {
        setSelectedGrids([]);
      }
    }

    document.addEventListener("mousedown", handleMouseClick);

    return () => {
      document.removeEventListener("mousedown", handleMouseClick);
    };
  }, []);

  function handleMouseDown(index) {
    setStart(index);
  }
  function handleMouseUp(index) {
    calculateGrids(start, index);
  }

  function calculateGrids(start, end) {
    let newStart = start,
      newEnd = end;
    let newGrids = [];
    if (start > end) {
      let temp = start;
      newStart = end;
      newEnd = temp;
    }
    for (let i = newStart - 1; i < newEnd; i++) {
      newGrids.push(i);
    }
    setSelectedGrids(newGrids);
  }

  return (
    <>
      <div
        ref={gridRef}
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${cols}, 35px)`,
          gridTemplateRows: `repeat(${rows}, 35px)`,
          gap: "3px",
          width: "max-content",
          border: "1px solid black",
        }}
      >
        {[...Array(cols * rows)].map((_, i) => (
          <div
            key={i}
            onMouseDown={() => handleMouseDown(i + 1)}
            onMouseUp={() => handleMouseUp(i + 1)}
            style={{
              cursor: "pointer",
              border: "1px solid black",
              backgroundColor: selectedGrids.includes(i) ? "green" : "white",
            }}
          >
            <span>{i + 1}</span>
          </div>
        ))}
      </div>
    </>
  );
}

export default FlipkartSelectableGrid;
