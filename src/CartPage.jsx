import React, { useEffect, useState } from "react";
import { getProductData } from "./API";
import Loading from "./Loading";
import CartList from "./CartList";

function CartPage({ cart, updateCart }) {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setLoading(true);
    const productIds = Object.keys(cart);
    const myProductPromises = productIds.map((id) => getProductData(id));
    Promise.all(myProductPromises).then((products) => setProducts(products));
    setLoading(false);
  }, [cart]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="p-10">
      <div className="h-screen bg-white max-w-6xl mx-auto px-20 py-16">
        <CartList products={products} cart={cart} updateCart={updateCart} />
      </div>
    </div>
  );
}
export default CartPage;
