import React, {memo} from 'react'

function Search({
    onChange
}) {

    console.log("Component Rendered..!!")
  return (
    <>
    <input type="text" onChange={(e)=> onChange(e.target.value)}/>
    </>
  )
}

export default memo(Search);