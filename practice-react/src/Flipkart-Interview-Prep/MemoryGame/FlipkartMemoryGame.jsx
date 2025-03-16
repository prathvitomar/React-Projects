import React, { useState, useEffect } from "react";

function FlipkartMemoryGame() {
  const GRID_OPTIONS = [2, 4, 6];       // Grid size options (should be even for pairs)
  const [gridSize, setGridSize] = useState(GRID_OPTIONS[0]);    // Selected Grid Size to create game
  const [grid, setGrid] = useState([]);             // All the Grid values
  const [selected, setSelected] = useState([]);         // Selected Grid
  const [matched, setMatched] = useState([]);           // Storing Matched Grids

  useEffect(() => {
    generateGrid(gridSize);             //  Reset the game when grid options changes
  }, [gridSize]);

  function generateGrid(size) {
    let totalTiles = size * size;
    let pairs = totalTiles / 2;
    let numbers = [...Array(pairs).keys(), ...Array(pairs).keys()]; // Create pairs
    numbers = numbers.sort(() => Math.random() - 0.5); // Shuffle numbers
    setGrid(numbers);
    setSelected([]);
    setMatched([]);
  }

  function handleGridSize(e) {              // Sets Grid Values
    setGridSize(Number(e.target.value));
  }

  function handleClick(index) {
    if (selected.length === 2 || matched.includes(index)) return;       

    let newSelected = [...selected, index];
    setSelected(newSelected);

    if (newSelected.length === 2) {
      setTimeout(() => checkMatch(newSelected), 500);
    }
  }

  function checkMatch([first, second]) {        
    if (grid[first] === grid[second]) {
      setMatched([...matched, first, second]);
    }
    setSelected([]);
  }

  function handleReset() {
    generateGrid(gridSize);
  }

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h3>Select Grid Size:</h3>
        <select value={gridSize} onChange={handleGridSize}>
          {GRID_OPTIONS.map((size) => (
            <option key={size} value={size}>
              {size} x {size}
            </option>
          ))}
        </select>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${gridSize}, 50px)`,
            gridTemplateRows: `repeat(${gridSize}, 50px)`,
            gap: "3px",
            margin: "20px auto",
            border: "1px solid black",
            width: "max-content",
            padding: "10px",
          }}
        >
          {grid.map((num, i) => (
            <div
              key={i}
              onClick={() => handleClick(i)}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
                border: "1px solid black",
                height: "50px",
                width: "50px",
                backgroundColor: matched.includes(i)
                  ? "lightgreen"
                  : selected.includes(i)
                  ? "lightblue"
                  : "white",
                fontSize: "20px",
                fontWeight: "bold",
              }}
            >
              {selected.includes(i) || matched.includes(i) ? num : "?"}
            </div>
          ))}
        </div>

        {matched.length === grid.length && <h2>🎉 You Won! 🎉</h2>}

        <button onClick={handleReset} style={{ marginTop: "10px" }}>
          Reset Game
        </button>
      </div>
    </>
  );
}

export default FlipkartMemoryGame;
