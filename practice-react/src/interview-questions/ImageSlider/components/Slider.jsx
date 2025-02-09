import { useEffect, useState } from "react";

export default function Slider({
  currentIndex,
  handlePrev,
  handleNext,
  imageData,
  handleCurrentIndex,
}) {
  return (
    <>
      <div children="slider-main">
        <div className="slider">
          {imageData.length > 0 && (
            <div key={imageData[currentIndex]?.id}>
              <img
                className="image"
                src={imageData[currentIndex]?.download_url}
                alt={`Image ${imageData[currentIndex]?.id}`}
              />
            </div>
          )}
        </div>
        <div className="dot-main">
          {imageData.map((clickable) => (
            <div
              onClick={() => handleCurrentIndex(clickable.id)}
              className="dot"
              key={clickable.id}
            >
              <h2>🗽</h2>
            </div>
          ))}
        </div>
        <div>
          <button onClick={handlePrev}>Prev</button>
          <button onClick={handleNext}>Next</button>
        </div>
      </div>
    </>
  );
}
