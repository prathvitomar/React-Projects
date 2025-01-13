import React, { useEffect, useState } from 'react'

function ImageSlider2() {
    const images = [
        'https://plus.unsplash.com/premium_photo-1690522330990-250e9a828c08?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1735236270565-983422d5a224?q=80&w=1530&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1735437629103-0fac198c7c2e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1735437643865-18e22575a630?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    ]
    const [imageNum, setImageNum] = useState(0);

    function handlePrev(){
        if(imageNum === 0) return setImageNum(images.length - 1);
        setImageNum(prev => prev - 1);
    }

    function handleNext(){
        if(imageNum === images.length - 1) return setImageNum(0);
        setImageNum(prev => prev + 1);
    }

  return (
    <>
    <button onClick={handlePrev}>Prev</button>
        <img width={'200px'} src={images[imageNum]} alt="" />
    <button onClick={handleNext}>Next</button>
    </>
  )
}

export default ImageSlider2