import React, { useState, useEffect } from 'react'
import { useLoaderData, useParams } from 'react-router-dom'

function Github() {
    // const {userId} = useParams();
    const data = useLoaderData();
    console.log(data);
    
    // const [data, setData] = useState({});

    // useEffect(()=>{
    // fetch("https://api.github.com/users/prathvitomar")
    // .then(res => res.json())
    // .then(data => setData(data))
    // },[])

  return (
    <>
        <div>
            {/* <h1 className='mt-3 mb-3 italic'> UserId : {userId}</h1> */}
            <h1 className='mt-3 mb-3 italic'> Github Followers : {data.followers}</h1>
            <img className='mt-3 mb-3' width="300px" src={data.avatar_url} alt="Github PFP" />
        </div>
    </>
  )
}

export default Github

export const githubApi = async ()=>{
    const res = await fetch("https://api.github.com/users/prathvitomar")
    return res.json();
}