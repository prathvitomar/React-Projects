import React, { useState } from "react";
import useFetch from "./hooks/useFetch";
import ProductCard from "./components/ProductCard";
import { PAGE_SIZES } from "./constants/constants.js";
import Pagination from "./components/Pagination.jsx";
import PageOptions from "./components/PageOptions.jsx";

function Main() {
  const { data, loading, error } = useFetch("https://dummyjson.com/product");
  const [activePage, setActivePage] = useState(0);
  const [selectedPageSize, setSelectedPageSize] = useState(PAGE_SIZES[0]);
  const totalLength = data && data.products ? data.products.length : 0;
  const totalPages = Math.ceil(totalLength / selectedPageSize);
  const start = activePage * selectedPageSize;
  const end = start + selectedPageSize;

  function handlePageNumber(id) {
    setActivePage(id);
  }

  function handlePrev() {
    if (activePage === 0) return;
    setActivePage((prev) => prev - 1);
  }

  function handleNext() {
    if (activePage === totalPages - 1) return;
    setActivePage((prev) => prev + 1);
  }

  if (error) return <h5>{error}</h5>;

  if (loading) return <h5>Loading...</h5>;

  return (
    <>
      <div className="products-main">
        <div>{data && <ProductCard data={data} start={start} end={end} />}</div>
        <div>
          {PAGE_SIZES && (
            <PageOptions
              PAGE_SIZES={PAGE_SIZES}
              selectedPageSize={selectedPageSize}
              setSelectedPageSize={setSelectedPageSize}
            />
          )}
        </div>
      </div>
      <div className="pagination-main">
        <Pagination
          activePage={activePage}
          handleNext={handleNext}
          handlePrev={handleNext}
          totalPages={totalPages}
          handlePageNumber={handlePageNumber}
        />
      </div>
    </>
  );
}

export default Main;
