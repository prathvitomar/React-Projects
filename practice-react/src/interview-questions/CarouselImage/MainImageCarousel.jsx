import React, { useEffect, useState } from "react";

function MainImageCarousel() {
  const API_ENDPOINT = "https://www.reddit.com/r/aww/top/.json?t=all";
  const [data, setData] = useState([]);
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    (async () => {
      try {
        const apiData = await fetch(API_ENDPOINT);
        const res = await apiData.json();
        const validImages = res.data.children.filter(
          (post) => post.data.url && post.data.url.includes("jpg")
        );
        setData(validImages);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    })();
  }, []);

  function handlePrev() {
    setImageIndex((prev) => Math.max(0, prev - 1));
  }

  function handleNext() {
    setImageIndex((prev) => Math.min(data.length - 1, prev + 1));
  }

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>Reddit Image Carousel - /r/aww</h1>

      {data.length > 0 ? (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "1px solid black",
            padding: "20px",
            borderRadius: "10px",
          }}
        >
          <button
            style={{ margin: "10px", padding: "10px" }}
            disabled={imageIndex === 0}
            onClick={handlePrev}
          >
            {"<"}
          </button>

          <img
            style={{
              width: "300px",
              height: "300px",
              objectFit: "cover",
              borderRadius: "10px",
            }}
            src={data[imageIndex].data.url}
            alt={data[imageIndex].data.title}
          />

          <button
            style={{ margin: "10px", padding: "10px" }}
            disabled={imageIndex === data.length - 1}
            onClick={handleNext}
          >
            {">"}
          </button>
        </div>
      ) : (
        <p>Loading images...</p>
      )}
    </div>
  );
}

export default MainImageCarousel;
