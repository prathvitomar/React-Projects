import React, { useState, createContext } from 'react'
export const UserContext = createContext();

function UserContextProvider({children}) {
    const [user, setUser] = useState(null);
    console.log(user);
  return (
    <UserContext.Provider value={{user, setUser}}>
        {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider