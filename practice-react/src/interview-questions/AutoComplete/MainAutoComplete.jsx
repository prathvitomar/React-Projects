import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [cache, setCache] = useState({});
  const [show, setShow] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1); 

  useEffect(() => {
    if (!search) {
      setData([]);
      return;
    }
    if (cache[search]) {
      setData(cache[search]);
      console.log("CACHE RETURN..!!!");
      return;
    }
    let timeout = setTimeout(() => {
      (async function () {
        try {
          const apiData = await fetch(
            `https://dummyjson.com/products/search?q=${search}`
          );
          const res = await apiData.json();
          setData(res.products);
          setCache((prev) => ({ ...prev, [search]: res.products }));
        } catch (error) {}
      })();
    }, 300);

    return () => {
      clearTimeout(timeout);
    };
  }, [search]);

  const handleKeyDown = (e) => {
    if (!data.length) return;

    if (e.key === "ArrowDown") {
      setHighlightedIndex((prev) => (prev < data.length - 1 ? prev + 1 : 0));
    } else if (e.key === "ArrowUp") {
      setHighlightedIndex((prev) => (prev > 0 ? prev - 1 : data.length - 1));
    } else if (e.key === "Enter" && highlightedIndex >= 0) {
      setSearch(data[highlightedIndex].title); 
      setShow(false);
      setHighlightedIndex(-1);
    }
  };

  return (
    <div className="App">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onFocus={() => setShow(true)}
        onBlur={() => setTimeout(() => setShow(false), 200)} 
        onKeyDown={handleKeyDown} 
      />
      {show && (
        <div className="products-list">
          {data &&
            data.map((product, index) => (
              <div
                key={product.id}
                className={`products-item ${
                  highlightedIndex === index ? "highlighted" : ""
                }`} 
              >
                <span>{product.title}</span>
              </div>
            ))}
        </div>
      )}
    </div>
  );
}
