import React, { useEffect, useMemo, useState } from "react";
import { CartContext } from "../Contexts";
import { withUser } from "../withProvider";
import { getCart, getProductsByIds, saveCart } from "../API";
function CartProvider({ isLoggedIn, children }) {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    if (isLoggedIn) {
      getCart().then((savedCart) => setCart(savedCart));
    } else {
      const savedDataString = localStorage.getItem("myCart") || "{}";
      const savedData = JSON.parse(savedDataString);
      quantityMapToCart(savedData);
    }
  }, []);

  const quantityMapToCart = (quantityMap) => {
    getProductsByIds(Object.keys(quantityMap)).then((products) => {
      const savedCart = products.map((p) => ({
        product: p,
        quantity: quantityMap[p.id],
      }));
      setCart(savedCart);
    });
  };

  const addToCart = (productId, count) => {
    const quantityMap = cart.reduce(
      (m, cartItem) => ({ ...m, [cartItem.product.id]: cartItem.quantity }),
      {}
    );
    const oldCart = quantityMap[productId] || 0;
    const newCart = { ...quantityMap, [productId]: oldCart + count };
    updateCart(newCart);
  };

  const updateCart = (quantityMap) => {
    if (isLoggedIn) {
      saveCart(quantityMap).then((res) => {
        quantityMapToCart(quantityMap);
      });
    } else {
      const quantityMapString = JSON.stringify(quantityMap);
      localStorage.setItem("myCart", quantityMapString);
      quantityMapToCart(quantityMap);
    }
  };

  const cartCount = useMemo(() =>
    cart.reduce((previous, current) => previous + current.quantity, 0)
  );

  return (
    <>
      <CartContext.Provider
        value={{ cart, cartCount, addToCart, updateCart, setCart }}>
        {children}
      </CartContext.Provider>
    </>
  );
}
export default withUser(CartProvider);
