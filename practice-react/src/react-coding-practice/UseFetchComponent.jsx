import React, { useEffect, useState } from "react";
import useFetch from "../hooks-practice/useFetch";

function UseFetchComponent() {
  const url = "https://dummyjson.com/products";
  const { data, error } = useFetch({ url: url });
  const [show, setShow] = useState(false);
  //   const [height, setHeight] = useState(window.innerHeight);
  //   const [width, setWidth] = useState(window.innerWidth);

  //   useEffect(() => {
  //     setHeight(window.innerHeight);
  //     setWidth(window.innerWidth);
  //   }, [height, width]);

  const [size, setSize] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const outsideClick = (e) => {
    if (e.target === e.currentTarget) {
      setShow(false);
    }
  };

  const handleModal = () => {
    setShow((prev) => !prev);
  };

  return (
    <div>
      {error ? (
        <p>Error: {error}</p>
      ) : data.length > 0 ? (
        <>
          {data.map((product, index) => (
            <div key={index}>
              <li>{product.title}</li>
            </div>
          ))}
          <button onClick={handleModal}>
            {show ? "Hide Modal" : "Show Modal"}
          </button>
          {show ? (
            <div
              onClick={(e) => outsideClick(e)}
              style={{
                height: "100%",
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <div
                onClick={(e) => e.stopPropagation()}
                style={{
                  height: "300px",
                  width: "300px",
                  border: "1px solid black",
                }}
              >
                <h1>This is Modal</h1>
                <h3>This is Description</h3>
              </div>
            </div>
          ) : null}

          <h1>Height : {size.height}</h1>
          <h1>Width : {size.width}</h1>
        </>
      ) : (
        <p>Loading or no data available...</p>
      )}
    </div>
  );
}

export default UseFetchComponent;
