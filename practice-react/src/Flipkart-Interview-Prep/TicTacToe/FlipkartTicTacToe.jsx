import React from "react";
import { useState } from "react";

function FlipkartTicTacToe() {
  const [grids, setGrids] = useState([...Array(9).fill("")]);
  const [player, setPlayer] = useState("X");

  const winningGrids = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  function checkWinner(newGrids) {
    for (let pattern of winningGrids) {
      const [ a, b, c ] = pattern;
      if (
        newGrids[a] &&
        newGrids[a] === newGrids[b] &&
        newGrids[a] === newGrids[c]
      ) {
        return newGrids[a];
      }
    }
    return null;
  }

  function handleGrids(i) {
    if (grids[i]) return;

    let newGrids = [...grids];
    newGrids[i] = player;
    setGrids(newGrids);

    const winner = checkWinner(newGrids);
    if (winner) {
      setTimeout(() => {
        alert(`Player ${winner} wins!`);
        handleReset();
      }, 100);
      return;
    }

    if (!newGrids.includes("")) {
      setTimeout(() => {
        alert("It's a draw!");
        handleReset();
      }, 100);
      return;
    }

    setPlayer(player === "X" ? "O" : "X");
  }


  function handleReset() {
    setGrids([...Array(9).fill("")]);
    setPlayer("X");
  }

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <div>
          <h2>{player} Player Turn</h2>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 50px)",
            justifyContent: "center",
          }}
        >
          {grids.map((grid, i) => (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "50px",
                width: "50px",
                border: "1px solid black",
              }}
              onClick={() => handleGrids(i)}
              key={i}
            >
              <span>{grid}</span>
            </div>
          ))}
        </div>
        <div>
          <button onClick={handleReset}>Reset Game</button>
        </div>
      </div>
    </>
  );
}

export default FlipkartTicTacToe;
