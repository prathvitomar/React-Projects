import React from 'react'
import { Link } from 'react-router-dom'
import service from '../appwrite/config';

function PostCard({
        $id,
        title,
        featuredImage
}) {

  return (
    <>
    <div>
    <div className=''>
        <Link to={`/blog/${$id}`}>
        <img src={service.getFilePreview(featuredImage)} alt={title} />
        </Link>
    </div>
    <div>
        <h1>{title}</h1>
    </div>
    </div>
    </>
  )
}

export default PostCard