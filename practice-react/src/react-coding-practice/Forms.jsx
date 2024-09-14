import React, { useState } from 'react'

function Forms() {
    const [allData, setAllData] = useState({})
    const formData = ( value, name, email, password) => {
        setAllData({
            [name]: value
        })
        console.log(allData)
    }

  return (
    <>
    <div>Forms</div>
    <form onSubmit={(e)=> {
        e.preventDefault();
        formData()
    }}>
        <input type="text" name='name' onChange={(e)=> formData(e.target.value, e.target.name)} />
        <input type="text" name='email' onChange={(e)=> formData(e.target.value, e.target.name)} />
        <input type="text" name='password' onChange={(e)=> formData(e.target.value, e.target.name)} />
        <button type='submit'>Submit</button>
    </form>
    </>
  )
}

export default Forms