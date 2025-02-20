import React, { useState } from "react";
import "./styles.css";
import useTicTacToe from "./useTicTacToe";
// import { useWindowSize } from 'react-use'
import Confetti from 'react-confetti'

function MainTicTacToe() {
  const { board, getStatusMessage, handleClick, resetGame, calculateWinner } = useTicTacToe();
  const winner = calculateWinner(board);
  return (
    <>
      <div className="game">
        {
          winner && <Confetti/> 
        }
        <div className="status">
          {getStatusMessage()}
          <button onClick={resetGame}>Reset Game</button>
        </div>
        <div className="board">
          {board.map((b, index) => (
            <button
              onClick={() => handleClick(index)}
              disabled={b !== null}
              className={`cell ${b !== null ? "selected" : "" }`}
              key={index}
            >
              {b}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

export default MainTicTacToe;
