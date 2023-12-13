import React from "react";
import { dummyProducts } from "./data";
import CartList from "./CartList";
function Test() {
  return (
    <div className="h-screen">
      <CartList products={dummyProducts} cart={{ 1: 3, 2: 4, 3: 7 }} />
    </div>
  );
}
export default Test;
