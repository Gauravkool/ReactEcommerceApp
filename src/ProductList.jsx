import React from "react";
import Product from "./Product";

function ProductList({ products }) {
  return (
    <>
      <div className="min-w-md grid grid-cols-3 grid-flow-row gap-4">
        {products.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </div>
    </>
  );
}
export default ProductList;
