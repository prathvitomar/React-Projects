import React, { createContext, useState } from 'react'

export const UserContext = createContext()

function UserContextApi({children}) {
    const [userName, setUserName] = useState(null)
  return (
    <UserContext.Provider value={{userName,setUserName}}>
        {children}
    </UserContext.Provider>
  )
}

export default UserContextApi