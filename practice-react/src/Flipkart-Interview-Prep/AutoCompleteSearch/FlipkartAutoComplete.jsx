import React, { useEffect, useState } from "react";
import "./searchStyle.css";
function FlipkartAutoComplete() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [cache, setCache] = useState({});
  const [selectedSearch, setSelectedSearch] = useState(-1)

  useEffect(() => {
    if (!search){
      setData([])
      return;
    }
    let timer = setTimeout(()=>{
      fetchData();
    },800)

    return ()=>{
      clearTimeout(timer)
    }
  }, [search]);

  async function fetchData() {
    try {
      if(cache[search]){
        setData(cache[search])
        console.log("CACHE RETURNED");
        return;
      }
      const apiData = await fetch(
        `https://dummyjson.com/products/search?q=${search}`
      );
      const res = await apiData.json();
      setData(res.products);
      setCache(prev => ({...prev, [search] : res.products}));
    } catch (error) {
      throw new Error("Error Happened while fetching Data..!!!");
    }
  }

  function handleSelect(name) {
    setSearch(name);
  }

  function handleSelect(name) {
    setSearch(name);
    setData([]); 
    setSelectedSearch(-1); 
  }

  function handleKeyDown(e) {
    if (e.key === "ArrowDown") {
      setSelectedSearch((prev) =>
        prev === data.length - 1 ? 0 : prev + 1 
      );
    }
    if (e.key === "ArrowUp") {
      setSelectedSearch((prev) =>
        prev <= 0 ? data.length - 1 : prev - 1 
      );
    }
    if (e.key === "Enter" && selectedSearch >= 0) {
      setSearch(data[selectedSearch].title);
      setData([]); 
      setSelectedSearch(-1); 
    }
  }

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
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <div>
            <input
              style={{ width: "300px" }}
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={handleKeyDown}
            />
          </div>
          <div>
            {data.length > 0 &&
              data.map((item, i) => (
                <div
                className={`search-item ${selectedSearch === i ? "hovering" : ""}`}
                  onClick={() => handleSelect(item.title)}
                  style={{
                    width: "300px",
                    border: "1px solid black",
                    cursor: "pointer",
                  }}
                  key={i}
                >
                  {item.title}
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default FlipkartAutoComplete;
