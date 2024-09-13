import React from 'react'
import { useSelector } from 'react-redux';

function Home() {
    const [posts, setPosts] = useState([]);
    const isAuthor = useSelector(state => state.auth.status);
    
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
            {isAuthor && (
                <div>
                    Login to Read and Create Blogs
                </div>
            )}
        </>
    )
}

export default Home