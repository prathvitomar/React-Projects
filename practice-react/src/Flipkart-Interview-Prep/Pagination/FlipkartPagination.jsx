import React, { useEffect, useState } from "react";

function FlipkartPagination() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [skip, setSkip] = useState(5);
  const options = [5, 10, 15, 20];
  const totalLength = data.products && data.products.length;
  const totalPages = Math.ceil(totalLength / skip);
  let start = currentPage * skip;
  let end = start + skip;

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const apiData = await fetch(`https://dummyjson.com/products?limit=50`);
      const res = await apiData.json();
      setData(res);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  function handlePage(index) {
    setCurrentPage(index);
  }

  function handlePrev() {
    setCurrentPage((prev) => Math.max(0, prev - 1));
  }

  function handleNext() {
    setCurrentPage((prev) => Math.min(totalPages - 1, prev + 1));
  }

  function handleSkip(e) {
    setSkip(Number(e.target.value));
    setCurrentPage(0);
  }

  if (loading) return <h3>Loading....</h3>;

  if (error) return <h3>{error}</h3>;

  return (
    <>
      <div>
        <div>
          <select value={skip} onChange={handleSkip}>
            {options.map((option, i) => (
              <option key={i} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div>
          {data.products.length > 0 &&
            data.products.slice(start, end).map((item, i) => (
              <div
                style={{ padding: "20px", border: "1px solid black" }}
                key={item.id}
              >
                <h5>{item.id}</h5>
                <li>{item.title}</li>
                <li>{item.description}</li>
                <li>{item.category}</li>
              </div>
            ))}
        </div>
        <div
          style={{
            padding: "20px",
            border: "1px solid black",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <button disabled={currentPage === 0} onClick={handlePrev}>
            Prev
          </button>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {[...Array(totalPages).keys()].map((_, index) => (
              <button
                onClick={() => handlePage(index)}
                style={{
                  padding: "10px",
                  margin: "10px",
                  border: "1px solid black",
                }}
              >
                <span>{index + 1}</span>
              </button>
            ))}
          </div>
          <button
            disabled={currentPage === totalPages - 1}
            onClick={handleNext}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}

export default FlipkartPagination;
