import { useState, useEffect } from "react";
import Slider from "./components/Slider";

export default function MainSlider() {
  const url = "https://picsum.photos/v2/list?page=1&limit=10";
  const [imageData, setImageData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async function () {
      try {
        const data = await fetch(url);
        const res = await data.json();
        setImageData(res);
      } catch (err) {
        setError(err.message);
      }
    })();
  }, []);

  function handlePrev() {
    currentIndex === 0
      ? setCurrentIndex(imageData.length - 1)
      : setCurrentIndex((prev) => prev - 1);
  }

  function handleNext() {
    currentIndex === imageData.length - 1
      ? setCurrentIndex(0)
      : setCurrentIndex((prev) => prev + 1);
  }

  function handleCurrentIndex(id){
    setCurrentIndex(id)
  }


  return (
    <>
      <h1>Image Slider</h1>
      <Slider
        currentIndex={currentIndex}
        handleNext={handleNext}
        handlePrev={handlePrev}
        imageData={imageData}
        error={error}
        handleCurrentIndex = {(id) => handleCurrentIndex(id)}
      />
    </>
  );
}
