import React, { useEffect, useState } from "react";

function LoadMore() {
  const [data, setData] = useState([]);
  const [loadNumber, setLoadNumber] = useState(10);

  useEffect(() => {
    fetchData();
  }, [loadNumber]);

  async function fetchData() {
    try {
      const res = await fetch(
        `https://dummyjson.com/products?limit=10&skip=${loadNumber}`
      );
      const resData = await res.json();
      setData(resData.products);
      console.log(resData);
    } catch (error) {
      console.log("Fetching data failed");
    }
  }

  function loadMoreProducts(){
    setLoadNumber(prev => prev + 10)
  }

  return (
    <>
      <div>
        <div>
          {data.length > 0 ? (
            data.map((item) => (
              <div key={item.id} style={{
                border: '1px solid black',
                display: 'flex',
                justifyContent: 'center'
              }}>
                <h1>{item.title}</h1>
                <p>{item.description}</p>
                <img
                  src={item.images[0]}
                  alt={item.images[0]}
                  style={{
                    height: "300px",
                    width: "300px",
                  }}
                />
                
              </div>
            ))
          ) : (
            <h2>Loading...</h2>
          )}
        </div>
        <div>
            <button onClick={loadMoreProducts}>Load More</button>
        </div>
      </div>
    </>
  );
}

export default LoadMore;
