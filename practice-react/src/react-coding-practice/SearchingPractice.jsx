import React, { useEffect, useState } from "react";

function SearchingPractice() {
  const [input, setInput] = useState("");
  const searchData = ["mango", "search", "laptop", "desktop", "state"];
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(searchData.map(prev => prev.includes(input) ? [...prev] : null))
  }, [input]);

  return (
    <>
      <div>
        <div>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
        {data.length > 0 &&
          data.map((item, index) => <ul key={index}>{item}</ul>)}
      </div>
    </>
  );
}

export default SearchingPractice;
