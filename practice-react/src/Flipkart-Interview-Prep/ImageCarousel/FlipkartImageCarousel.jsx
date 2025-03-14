import React, { useEffect, useState } from 'react'
import { images } from './image';
function FlipkartImageCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [cache, setCache] = useState([]);

    useEffect(()=>{
        let timer;
        timer = setTimeout(()=>{
            handleNext();
        },3000)

        return ()=>{
            clearTimeout(timer)
        }
    },[currentIndex])

    function handlePrev(){
        setCurrentIndex(prev => prev === 0 ? images.length - 1 : prev - 1)
    }

    function handleNext(){
        setCurrentIndex(prev => prev === images.length - 1 ? 0 : prev + 1)
    }

  return (
    <>
        <div>
            <div style={{
                display : 'flex',
                justifyContent : 'center',
                alignItems : 'center'
            }}>
                <button onClick={handlePrev}>Prev</button>

                // this loop approach is better than rendering image through index because
                // all images will be rendered at once, and when we click prev and Next
                // all the images will be just display and hiding
                // while in index rendering approach, we will be making api call every single time,
                // when we click on prev or next.

                {
                    images.map((image, i)=>(               
                        <img key={image.data.url_overridden_by_dest} style={{
                            height:'300px',
                            width : '400px',
                            display : currentIndex === i ? "block" : "none"
                        }} src={image.data.url_overridden_by_dest} alt="" />
                    ))
                }
                
                // rendering through index
                {/* <img style={{
                    height:'300px',
                    width : '400px'
                }} src={images[currentIndex].data.url_overridden_by_dest} alt="" /> */}

                <button onClick={handleNext}>Next</button>
            </div>
        </div>
    </>
  )
}

export default FlipkartImageCarousel