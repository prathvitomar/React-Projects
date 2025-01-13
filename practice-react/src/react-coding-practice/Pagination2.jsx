import React, { useState } from 'react'

function Pagination2() {
    const arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34]
    const itemsPerPage = 5;
    const totalPages = Math.ceil(arr.length / itemsPerPage);
    const [pagination, setPagination] = useState(0);
    const pageData = arr.slice(pagination * itemsPerPage, (pagination + 1) * itemsPerPage);

    function handlePagination(value){
        if(value === 'prev'){
            if(pagination === 0) return
            setPagination(prev => prev - 1);
        }
        else if(value === 'next'){
            if (pagination === totalPages - 1) return;
            setPagination(next => next + 1);
        }
    }

  return (
    <>
        {
            pageData.map((item, i)=>(
                <ul key={i}>
                    <li>{item}</li>
                </ul>
            ))
        }
        <button onClick={() => handlePagination('prev')}>Prev</button>
        <button onClick={() => handlePagination('next')}>Next</button>
    </>
  )
}

export default Pagination2