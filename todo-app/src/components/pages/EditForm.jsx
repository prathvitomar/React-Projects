import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import PostForm from '../forms/PostForm';
import { useEffect } from 'react';
import service from '../../appwrite/config'
import { useState } from 'react';

function EditForm() {
    const navigate = useNavigate();
    const [post, setPost] = useState()
    const id = useParams();

    useEffect(()=>{
        service.getDocument(id)
        .then((res) => setPost(res))
        .catch((err) => navigate('/'))
    },[])

    return post ? (
        <>
            <PostForm post={post}/>
        </>
    ) : null
}

export default EditForm