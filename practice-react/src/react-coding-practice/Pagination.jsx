import React from "react";

function Pagination({ pageNumber, handlePage }) {
  return (
    <>
      <div style={{
        display: 'flex',
      }}>
        {
            pageNumber > 1 ? <button onClick={() => handlePage(-1)}>Prev</button> : null
        }
        <h1>{pageNumber}</h1>
        <button onClick={() => handlePage(+1)}>Next</button>
      </div>
    </>
  );
}

export default Pagination;
