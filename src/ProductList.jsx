import React from "react";
import Product from "./Product";

function ProductList({ products }) {
  return (
    <>
      <div className="flex gap-2">
        {products.map((product) => (
          <Product
            key={product.id}
            title={product.title}
            image={product.image}
            category={product.category}
            price={product.price}
          />
        ))}
      </div>
    </>
  );
}
export default ProductList;
