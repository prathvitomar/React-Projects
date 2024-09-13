import React from 'react'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import service from '../../appwrite/config';

function Post() {
    const [post, setPost] = useState();
    const id = useParams();
    const navigate = useNavigate();
    const isAuthor = useSelector(state => state.auth.status);
    
    useEffect(()=> {
        service.getDocument(id)
        .then((res)=> setPost(res))
        .catch((err)=> console.error(err))
    },[])

    const deletePost = () => {
        service.deleteDocument(id)
        .then(()=> navigate('/'))
        .catch((err)=> console.error(err))
    }
    
  return (
    <>
        <div className=''>
            <div>
                <PostForm post={post} />
            </div>
        </div>
        {
            isAuthor && (
                <div>
                    <button
                    type='button'
                    onClick={()=> navigate(`/edit-post/${post.$id}`)}
                    >Update</button>
                    <button
                    type='button'
                    onClick={deletePost}
                    >Update</button>
                </div>
            )
        }
    </>
  )
}

export default Post