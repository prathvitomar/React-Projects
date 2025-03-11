import React, { useEffect, useState } from "react";

function ProgressBar({ start, onComplete }) {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    if (percent >= 100) {
      onComplete();
      return;
    }
    let timer = setInterval(() => {
      setPercent((prev) => prev + 1);
    }, 30);

    return () => {
      clearInterval(timer);
    };
  }, [percent]);
  console.log("Component Rendered");

  if (start) {
    return (
      <>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <h1>Progress Bar</h1>
          <div
            style={{
              position: "relative",
              overflow: "hidden",
              width: "400px",
              height: "30px",
              border: "1px solid black",
              borderRadius: "10px",
              margin: "10px",
            }}
          >
            <div
              style={{
                position: "absolute",
                backgroundColor: "green",
                width: `${percent}%`,
                height: "30px",
              }}
            ></div>
            <span style={{ position: "absolute", right: "50%" }}>
              {percent}%
            </span>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <h1>Click Button to Start Progress Bar</h1>
      </>
    );
  }
}

export default ProgressBar;
