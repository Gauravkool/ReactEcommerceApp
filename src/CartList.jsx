import React, { useEffect, useState } from "react";
import CartRow from "./CartRow";
import Button from "./Button";
import { withCart } from "./withProvider";

function CartList({ cart, updateCart }) {
  const [quantityMap, setQuantityMap] = useState({});

  const cartToQuantityMap = () =>
    cart.reduce(
      (m, cartItem) => ({ ...m, [cartItem.product.id]: cartItem.quantity }),
      {}
    );

  useEffect(() => {
    setQuantityMap(cartToQuantityMap());
  }, [cart]);

  const handleUpdateCart = () => {
    updateCart(quantityMap);
  };

  const handleCartQuantityChange = (productId, newValue) => {
    const newQuantityMap = { ...quantityMap, [productId]: newValue };
    setQuantityMap(newQuantityMap);
  };

  const handleRemove = (productId) => {
    const newQuantityMap = cartToQuantityMap();
    delete newQuantityMap[productId];
    updateCart(newQuantityMap);
  };

  return (
    <div className="">
      <div className="flex font-semibold space-x-4 px-4 py-4 border border-gray-200 bg-gray-100">
        <span className="grow ml-28">Product</span>
        <span className="w-20">Price</span>
        <span className="w-32">Quantity</span>
        <span className="w-20">Subtotal</span>
      </div>
      {cart.map((cartItem) => (
        <CartRow
          key={cartItem.product.id}
          product={cartItem.product}
          quantity={quantityMap[cartItem.product.id] || cartItem.quantity}
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
export default withCart(CartList);
