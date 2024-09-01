import React, {useContext} from 'react'
import { UserContext } from "../context/UserContextProvider";

function Profile() {
    const {user} = useContext(UserContext);
    if (!user) {
        return <h1>Please Return</h1>
    }

    return (
        <>
            <h2>{user.username}</h2>
            <h2>{user.password}</h2>
        </>
    )
}

export default Profile