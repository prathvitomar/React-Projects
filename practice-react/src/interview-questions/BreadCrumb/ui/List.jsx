import React from 'react'

function List({data = [], handleId}) {
    const { id, title } = data;

    function handleClick(_id){
        handleId(_id)
        console.log(_id)
    }

  return (
    <>
        <ul style={{
            'height' : '100px',
            'display': 'flex',
            'justifyContent': 'center',
        }}>
            <li onClick={() => handleClick(id)}>{title}</li>
        </ul>
    </>
  )
}

export default List