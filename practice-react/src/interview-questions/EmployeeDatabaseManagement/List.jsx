import React from 'react'
import "./styles.css";

function List({
    name,
    handleCancel,
    handleSelect
}) {

  return (
    <>
        <div onClick={() => handleSelect(name)} className='lists div-space-between'>
            <h3>{name}</h3>
            <div className='span' onClick={()=> handleCancel(name)}>
                <span className='span-icon'>X</span>
            </div>
        </div>
    </>
  )
}

export default List