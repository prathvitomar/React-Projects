import React, { useEffect, useRef, useState } from "react";
import "./searchStyle.css";
import Pills from "./Pills";

function FlipkartAutoComplete() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [cache, setCache] = useState({});
  const [selectedSearch, setSelectedSearch] = useState(-1);
  const inputRef = useRef(null);

  useEffect(() => {
    if (!search) {
      setData([]);
      return;
    }
    let timer = setTimeout(() => {
      fetchData();
    }, 800);

    return () => {
      clearTimeout(timer);
    };
  }, [search]);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  async function fetchData() {
    try {
      if (cache[search]) {
        setData(cache[search]);
        console.log("CACHE RETURNED");
        return;
      }
      const apiData = await fetch(
        `https://dummyjson.com/products/search?q=${search}`
      );
      const res = await apiData.json();
      setData(res.products);
      setCache((prev) => ({ ...prev, [search]: res.products }));
    } catch (error) {
      throw new Error("Error Happened while fetching Data..!!!");
    }
  }

  function handleSelect(name) {
    setSearch("");
    setSelectedItems((prev) => [...prev, name]);
    setData([]);
    setSelectedSearch(-1);
  }

  function handleKeyDown(e) {
    if (e.key === "ArrowDown") {
      setSelectedSearch((prev) => (prev === data.length - 1 ? 0 : prev + 1));
    }
    if (e.key === "ArrowUp") {
      setSelectedSearch((prev) => (prev <= 0 ? data.length - 1 : prev - 1));
    }
    if (e.key === "Enter" && selectedSearch >= 0) {
      setSearch("");
      setSelectedItems((prev) => [...prev, data[selectedSearch].title]);
      setData([]);
      setSelectedSearch(-1);
    }
  }

  function removeItem(name) {
    setSelectedItems((prev) => prev.filter((i) => i !== name));
  }

  return (
    <>
      <div className="autocomplete-container">
        <div className="autocomplete-box">
          <div className="pills-container">
            {selectedItems.length > 0 &&
              selectedItems.map((pill, i) => (
                <Pills key={i} removeItem={removeItem} name={pill} />
              ))}
          </div>

          <input
            className="search-input"
            type="text"
            ref={inputRef}
            placeholder="Search...."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        </div>

        <div className="search-results">
          {data.length > 0 &&
            data.map((item, i) => (
              <div
                className={`search-item ${
                  selectedSearch === i ? "hovering" : ""
                }`}
                onClick={() => handleSelect(item.title)}
                key={i}
              >
                {item.title}
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default FlipkartAutoComplete;
