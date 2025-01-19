import { HeartIcon, SpinnerIcon } from "./Icons.jsx";
import { useState } from "react";
import './styles.css';

export default function MainLikedButton() {
  const [liked, setLiked] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(null);

  async function handleLike(){
    setIsFetching(true);
    setError(null);
    try {
        const data = await fetch(`https://www.greatfrontend.com/api/questions/like-button`,{
            method: 'POST',
            headers : {
                'Content-Type': 'application/json'
            },
            body : JSON.stringify({ action : liked ? "unlike" : "like"})
        })
        if(data.status >= 200 && data.status < 300){
            setLiked(!liked);
        }
        else{
            const res = await data.json();
            setError(res.message)
            return;
        }
        console.log(await data.json());

    } finally{
        setIsFetching(false);
    }

}

  return (
    <div>
      <button disabled={isFetching} className={`likeBtn ${liked ? 'liked' : ''}`} onClick={handleLike}>
        {isFetching ? <SpinnerIcon/> : <HeartIcon />}
        {liked ? "Liked" : "Like"}
      </button>
        {
            error && <div>{error}</div>
        }
    </div>
  );
}
