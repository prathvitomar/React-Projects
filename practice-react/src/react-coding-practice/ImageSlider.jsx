import React, { useState } from 'react'

function ImageSlider() {
    const images = [
        "https://images.unsplash.com/photo-1519125323398-675f0ddb6308",
        "https://images.unsplash.com/photo-1521449256184-62e132f5d8f2",
        "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
        "https://images.unsplash.com/photo-1536768018638-6c1b9ee1f8c7",
        "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
        "https://images.unsplash.com/photo-1512820790803-83ca734da794",
        "https://images.unsplash.com/photo-1477244075012-5cc28286e465",
        "https://images.unsplash.com/photo-1518709268805-4e9042af9f23",
        "https://images.unsplash.com/photo-1468276311594-df7cb65d8df6",
        "https://images.unsplash.com/photo-1494783367193-149034c05e8f"
      ];
      const [number, setNumber] = useState(1)

      function handleImage(navigate){
        if(navigate === "prev"){
            if(number === 1){
                setNumber(images.length)
                console.log(number)
            }
            else{
                setNumber(prev => prev-1)
                console.log(number)
            }
        }
        else{
            if(number === images.length){
                setNumber(1)
                console.log(number)
            }
            else{
                setNumber(prev => prev+1)
                console.log(number)
            }
        }
      }
      
  return (
    <>
        <div>
            <button onClick={()=> handleImage("prev")}>Previous</button>
            <div>
                <img src={images[number]} alt={images[number]} style={{
                    height: '300px',
                    width: '300px',
                }} />
            </div>
            <button onClick={()=> handleImage("next")}>Next</button>
        </div>
    </>
  )
}

export default ImageSlider