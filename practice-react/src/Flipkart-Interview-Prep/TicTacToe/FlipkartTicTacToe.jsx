import React, { useState } from "react";

function FlipkartTicTacToe() {
  const [totalGrids, setTotalGrids] = useState([...Array(9).fill("")]);
  const [player, setPlayer] = useState(true);
  const [playerO, setPlayerO] = useState([]);
  const [playerX, setPlayerX] = useState([]);

  let winningGrids = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  function handleClick(i) {
    if (player) {
      setPlayerO((prev) => [...prev, i]);
      setPlayer(!player);
    } else {
      setPlayerX((prev) => [...prev, i]);
      setPlayer(!player);
    }
    if (winningGrids.includes(playerO)) {
      alert("Player O wins");
      setPlayer(true);
      setPlayerO([]);
      setPlayerX(0);
    }
    if (playerX.includes(winningGrids)) {
      alert("Player X wins");
      setPlayer(true);
      setPlayerO([]);
      setPlayerX(0);
    }
  }

  function handleReset() {
    setPlayer(true);
    setPlayerO([]);
    setPlayerX(0);
  }

  return (
    <>
      {[...Array(9).fill("")].map((item, i) => (
        <div
          onClick={() => handleClick(i)}
          style={{ border: "1px solid black", height: "30px", width: "50px" }}
          key={i}
        >
          {
            playerO.includes(i) ? (<h2>O</h2>) : (<h6>"Click"</h6>)
          }
        </div>
      ))}
    </>
  );
}

export default FlipkartTicTacToe;
