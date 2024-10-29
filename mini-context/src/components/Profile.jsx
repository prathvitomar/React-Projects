import React, { useContext } from 'react'
import { UserContext } from './UserContext'

function Profile() {
    const {userName} = useContext(UserContext)
    if(!userName) return <h1>Please Enter Username</h1>
  return (
    <div>Hello, {userName}</div>
  )
}

export default Profile