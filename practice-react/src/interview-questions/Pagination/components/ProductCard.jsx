import React from "react";

function ProductCard({data, start, end}) {
    if (!data || !data.products || data.products.length === 0) {
        return;
      }
  return (
    <>
      {data.products.length > 0 &&
        data.products.slice(start,end).map((product) => (
          <div className="product" key={product.id}>
            <h5>{product.id}</h5>
            <li>{product.title}</li>
            <p>{product.description}</p>
          </div>
        ))}
    </>
  );
}

export default ProductCard;
