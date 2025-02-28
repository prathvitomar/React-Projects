import { useState } from 'react';
import './chessboard.css';

function MainBishop({ boardSize = 8 }) {
  const [hoveredSquare, setHoveredSquare] = useState(null);

  const initialBoard = Array(boardSize)
    .fill(null)
    .map(() => Array(boardSize).fill(''));

  const handleMouseEnter = (row, col) => {
    setHoveredSquare([row, col]);
  };

  const handleMouseLeave = () => {
    setHoveredSquare(null);
  };

  const getSquareColor = (row, col) => {
    if (!hoveredSquare) return '';

    const [hoverRow, hoverCol] = hoveredSquare;

    if (row === hoverRow && col === hoverCol) return 'lightblue';

    if (Math.abs(hoverRow - row) === Math.abs(hoverCol - col))
      return 'darkblue';

    return '';
  };

  return (
    <div className="chessboard">
      {initialBoard.map((row, rowIndex) =>
        row.map((_, colIndex) => {
          const isDark = (rowIndex + colIndex) % 2 === 1;
          return (
            <div
              key={`${rowIndex}-${colIndex}`}
              className={`square ${isDark ? 'dark' : 'light'}`}
              style={{
                backgroundColor: getSquareColor(rowIndex, colIndex),
              }}
              onMouseEnter={() => handleMouseEnter(rowIndex, colIndex)}
              onMouseLeave={handleMouseLeave}
            ></div>
          );
        })
      )}
    </div>
  );
}

export default MainBishop;
