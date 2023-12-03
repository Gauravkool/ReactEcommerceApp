import React from "react";
import Product from "./Product";

function ProductList({ products }) {
  return (
    <>
      <div className="sm:grid grid-cols-3 gap-4 sm:space-y-0 space-y-4">
        {products.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </div>
    </>
  );
}
export default ProductList;
