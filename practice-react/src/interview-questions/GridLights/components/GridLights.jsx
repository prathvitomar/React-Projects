import { useState } from "react";

export default function GridLights({ ids, handleIds, removingIds }) {
  return (
    <>
      <div className="grids">
        {ids.map((divId) => (
          <div
            onClick={() => handleIds(divId)}
            className="grid-light"
            style={{
              backgroundColor: removingIds.includes(divId) ? "green" : "white",
            }}
            key={divId}
            id={divId}
          />
        ))}
      </div>
    </>
  );
}
