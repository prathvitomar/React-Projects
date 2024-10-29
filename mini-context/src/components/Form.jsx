import React, { useContext, useState } from 'react'
import { UserContext } from './UserContext';
import Profile from './Profile';

function Form() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const {setUserName} = useContext(UserContext)
  const handleSubmit= (e) => {
    e.preventDefault();
    setUserName(name);
    console.log(name)
    console.log(password)
  }

  return (
    <>
        <form onSubmit={handleSubmit}>
          <input type="text" name='username' value={name} onChange={(e)=> setName(e.target.value)}/>
          <input type="password" name='password' value={password} onChange={(e)=> setPassword(e.target.value)}/>
          <button type='submit'>Submit</button>
        </form>
        {/* <Profile/> */}
    </>
  )
}

export default Form