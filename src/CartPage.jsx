import React from "react";

import CartList from "./CartList";

function CartPage() {
  return (
    <div className="p-10">
      <div className="h-screen bg-white max-w-6xl mx-auto px-20 py-16">
        <CartList />
      </div>
    </div>
  );
}
export default CartPage;
