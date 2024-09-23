import React, { useCallback, useState } from 'react'
import Search from './Search';

function UseCallbackPrac() {
    
    const users = [
        'prathvi',
        'riya',
        'pulkit',
        'anubhav',
        'niharika',
        'neha',
        'nikita',
        'falak'
    ]

    const [user, setUser] = useState(users);
    const [allName, setAllNames] = useState([]);

    const findUser = useCallback((name) => {
        const filteredUser = users.filter((user)=> user.includes(name))
        setUser(filteredUser);
    },[user])  


    return (
        <>
            <Search
            onChange={(name) => findUser(name)}
            />
            <button onClick={()=> console.log(user)}>Find User</button>
            <div>
                <ul>
                    {
                        user.map((user) => (
                            <li key={user}>{user}</li>
                        ))
                    }
                </ul>
            </div>
            <h1>{allName}</h1>
        </>
    )
}

export default UseCallbackPrac