import React, { useState, useRef, useEffect } from "react";

function FlipkartStarRating() {
  const [filled, setFilled] = useState(-1);
  const [selected, setSelected] = useState(-1);
  const containerRef = useRef(null);

  function handleStars(i) {
    setFilled(i);
  }

  function handleClick(i) {
    setSelected(i);
  }

  function handleBlur(e) {
    if (containerRef.current && !containerRef.current.contains(e.relatedTarget)) {
      setFilled(selected);
    }
  }

  useEffect(() => {
    function handleClickOutside(event) {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setSelected(-1);
        setFilled(-1);
      }
    }

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div>
        <div
          ref={containerRef}
          onBlur={handleBlur}
          tabIndex={0}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            outline: "none",
          }}
        >
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              style={{
                padding: "10px",
                cursor: "pointer",
                fontSize: "2rem",
                color: i <= selected ? "black" : i <= filled ? "gray" : "lightgray",
              }}
              onMouseEnter={() => handleStars(i)}
              onMouseLeave={() => setFilled(selected)}
              onClick={() => handleClick(i)}
            >
              ★
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default FlipkartStarRating;