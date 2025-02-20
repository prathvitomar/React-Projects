import React, { useState } from "react";

const initialState = () => Array(9).fill(null);

function useTicTacToe() {
  const [board, setBoard] = useState(initialState());
  const [isXnext, setIsXnext] = useState(true);

  const WINNING_PATTERNS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const calculateWinner = (board) => {
    for (let i = 0; i < WINNING_PATTERNS.length; i++) {
      const [a, b, c] = WINNING_PATTERNS[i];
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a]; 
      }
    }
    return null;
  };

  const resetGame = () => {
    setBoard(initialState());
    setIsXnext(true);
  };

  const getStatusMessage = () => {
    const winner = calculateWinner(board);
    if (winner) {
      return `🎉 Player ${winner} wins! 🎉`;
    }
    if (!board.includes(null)) {
      return "It's a Draw!";
    }
    return `Player ${isXnext ? "X" : "O"}'s turn`;
  };

  const handleClick = (index) => {
    if (calculateWinner(board) || board[index]) return;
    const newBoard = [...board];
    newBoard[index] = isXnext ? "X" : "O";
    setBoard(newBoard);
    setIsXnext(!isXnext);
  };

  return { board, getStatusMessage, handleClick, resetGame, calculateWinner };
}

export default useTicTacToe;
