import React from 'react'

function Pills({name, removeItem}) {

  return (
    <>
        <div style={{backgroundColor: 'blueviolet',height : '20px', width : 'inline-flex', border : '1px solid black', borderRadius : '5px'}}>
                <span style={{marginRight : '8px', fontSize : '13px'}}>{name}</span>
                <span style={{color : 'red', cursor : 'pointer'}} onClick={()=> removeItem(name)}>❌</span>
        </div>
    </>
  )
}

export default Pills