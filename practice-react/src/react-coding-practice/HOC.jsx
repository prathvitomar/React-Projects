import React from 'react'

function HOC(PassedComponent) {
    return function authenticatedComp(props){
        const authToken = localStorage.getItem('authToken')
        const navigate = useNavigate();
        if(!authToken){
            navigate('/login')
            return null;
        }
        return <PassedComponent {...props}/>
    }
}

export default HOC
