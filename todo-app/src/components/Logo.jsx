import React from 'react'

function Logo({width = '100px'}) {
  return (
    <>
      <img src="public/images/blog.png" alt="Blog" width={width} />
    </>
  )
}

export default Logo