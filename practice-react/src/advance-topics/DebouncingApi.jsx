import React, { useEffect, useState } from "react";

function DebouncingApi() {
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  // http://universities.hipolabs.com/search?country=United+States

  useEffect(() => {
    const debouncer = setTimeout(async() => {
      try {
        setLoading(false);
        setError(false);
        const apiData = await fetch(
          `http://universities.hipolabs.com/search?country=${input}&limit=10`
        );
        const res = await apiData.json()
        setData(res);
        console.log(data);
      } catch (error) {
        console.log(error);
        setError(true);
      }
    }, 500);
    return () => {
      clearTimeout(debouncer);
    };
  }, [input]);

  return (
    <>
      <h1>Debouncing the API :</h1>
      {loading ? <h3>Loading...</h3> : null}
      {error ? <h3>Something went wrong</h3> : null}
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      {
        data && data.map((university, index)=>(
          <div key={index}>
            <li>{university.name}</li>
          </div>
        ))
      }
    </>
  );
}

export default DebouncingApi;
