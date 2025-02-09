import { useState } from "react"

export default function MainStarRating(){
    const [selectedStars, setSelectedStars] = useState(0);
    const stars = [1,2,3,4,5,6,7,8];
    return (
        <>
            <h1>Main Star Rating</h1>
            {
                stars.map(star =>(
                    <div key={star}>
                        <img src="./assets/icons8-star-100.png" alt="" />
                    </div>
                ))
            }
        </>
    )
}