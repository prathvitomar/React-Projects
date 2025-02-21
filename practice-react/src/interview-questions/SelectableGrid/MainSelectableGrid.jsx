import React, { useState, useRef } from "react";
import "./styles.css";

function MainSelectableGrid({ rows, cols }) {
    const [selectedGrids, setSelectedGrids] = useState([]);
    const isMouseDownRef = useRef(false);

    function handleMouseDown(index) {
        isMouseDownRef.current = true;
        setSelectedGrids([index]);
    }

    function handleMouseEnter(index) {
        if (isMouseDownRef.current && selectedGrids.length > 0) {
            const start = selectedGrids[0];
            const end = index;

            const rowStart = Math.floor((start - 1) / cols);
            const colStart = (start - 1) % cols;
            const rowEnd = Math.floor((end - 1) / cols);
            const colEnd = (end - 1) % cols;

            const minRow = Math.min(rowStart, rowEnd);
            const maxRow = Math.max(rowStart, rowEnd);
            const minCol = Math.min(colStart, colEnd);
            const maxCol = Math.max(colStart, colEnd);

            const selected = [];
            for (let row = minRow; row <= maxRow; row++) {
                for (let col = minCol; col <= maxCol; col++) {
                    selected.push(row * cols + col + 1);
                }
            }

            if (start > end) {
                selected.reverse();
            }

            setSelectedGrids(selected);
        }
    }

    function handleMouseUp() {
        isMouseDownRef.current = false;
    }

    return (
        <>
            <div>
                <div
                    onMouseUp={handleMouseUp}
                    className="grids"
                    style={{ "--rows": rows, "--cols": cols }}
                >
                    {[...Array(rows * cols).keys()].map((_, index) => (
                        <div
                            onMouseDown={() => handleMouseDown(index + 1)}
                            onMouseEnter={() => handleMouseEnter(index + 1)}
                            className={`box ${selectedGrids.includes(index + 1) ? "selected" : ""}`}
                            key={index}
                        >
                            {index + 1}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default MainSelectableGrid;
