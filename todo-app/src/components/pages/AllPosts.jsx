import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import service from '../../appwrite/config';
import PostCard from '../PostCard';

function AllPosts() {
    const [posts, setPosts] = useState([]);
    
    useEffect(()=> {
        service.listDocuments()
        .then((res)=> setPosts(res))
        .catch((err)=> console.error(err))
    },[])
    
    return (
        <>
            {posts.map((post)=> (
                <div key={post.$id}>
                    <PostCard post={post}/>
                </div>
            ))}
        </>
    )
}

export default AllPosts