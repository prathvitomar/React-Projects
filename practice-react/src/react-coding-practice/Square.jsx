import React from 'react'
import "./styles.css"

function Square({
    text = "",
    onClick
}) {
  return (
    <>
        <div onClick={onClick} className='box'>
            {true ? "O" : "X"}
        </div>
    </>
  )
}

export default Square