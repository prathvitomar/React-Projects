import React, { useEffect, useRef, useState } from 'react'
import "./style.css"
function MainStarRating({length = 5}) {
    const [clickedStar, setClickedStar] = useState(0);
    const starRef = useRef(null);

    useEffect(()=>{
        window.addEventListener('click', clickOutside);
        return ()=>{
        window.removeEventListener('click', clickOutside);
        }
    },[])

    function clickOutside(event){
        if(starRef.current && !starRef.current.contains(event.target)){
            setClickedStar(0)
        }
    }

    function handleStar(star){
        setClickedStar(star + 1)
    }

  return (
    <>
        <div style={{
            display : 'flex',
            width : 'auto',
            height : 'auto',
            border : '1px solid black'
        }}
        ref={starRef}
        >
            {
                [...Array(length).keys()].map((star)=>(
                    <div className={`${star < clickedStar ? "clicked" : ""}`} style={{
                        padding : '5px',
                        border : '1px solid black',
                        margin : '5px',
                        cursor : 'pointer'
                    }} onClick={()=> handleStar(star)} key={star}>
                        <span>{star + 1}</span>
                    </div>
                ))
            }
        </div>
    </>
  )
}

export default MainStarRating