import React, { useEffect, useState } from "react";
import CartRow from "./CartRow";
import Button from "./Button";

function CartList({ products, cart, updateCart }) {
  const [localCart, setLocalCart] = useState(cart);

  useEffect(() => {
    setLocalCart(cart);
  }, [cart]);

  const handleUpdateCart = () => {
    updateCart(localCart);
  };

  const handleCartQuantityChange = (productId, newValue) => {
    const newLocalcart = { ...localCart, [productId]: newValue };
    setLocalCart(newLocalcart);
  };

  const handleRemove = (productId) => {
    const newCart = { ...cart };
    delete newCart[productId];
    updateCart(newCart);
  };
  return (
    <div className="">
      <div className="flex font-semibold space-x-4 px-4 py-4 border border-gray-200 bg-gray-100">
        <span className="grow ml-28">Product</span>
        <span className="w-20">Price</span>
        <span className="w-32">Quantity</span>
        <span className="w-20">Subtotal</span>
      </div>
      {products.map((p) => (
        <CartRow
          key={p.id}
          product={p}
          quantity={localCart[p.id] || ""}
          onQuantityChange={handleCartQuantityChange}
          onRemove={handleRemove}
        />
      ))}
      <div className="flex justify-end px-8 py-4 border border-gray-200">
        <Button className="px-8" onClick={handleUpdateCart}>
          Update cart
        </Button>
      </div>
    </div>
  );
}
export default CartList;
