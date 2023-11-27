import React from "react";
import Product from "./Product";

function ProductList({ products }) {
  return (
    <>
      <div className="flex gap-2">
        {products.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </div>
    </>
  );
}
export default ProductList;
