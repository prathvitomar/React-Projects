import React from 'react'

function Pagination({activePage, handleNext, handlePrev, totalPages, handlePageNumber}) {
  return (
    <div className="pagination">
    <button disabled={activePage === 0} onClick={handlePrev}>Prev</button>
    {
        [...Array(totalPages).keys()].map((num)=>(
            <span style={{cursor : 'pointer'}} className="page" onClick={() => handlePageNumber(num)}>{num}</span>
        ))
    }
    <button disabled={activePage === totalPages - 1} onClick={handleNext}>Next</button>
  </div>
  )
}

export default Pagination