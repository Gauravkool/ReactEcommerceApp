import React, { useEffect, useState } from "react";
import { getProductData } from "./API";
import { IoMdCloseCircle } from "react-icons/io";
import Input from "./Input";
import Loading from "./Loading";
import Button from "./Button";
function CartPage({ cart, updateCart }) {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [localCart, setLocalCart] = useState(cart);
  const productIds = Object.keys(cart);

  useEffect(() => {
    setLocalCart(cart);
  }, [cart]);

  useEffect(() => {
    const myProductPromises = productIds.map((id) => getProductData(id));
    Promise.all(myProductPromises).then((products) => setProducts(products));
    setLoading(false);
  }, [cart]);

  const handleRemove = (e) => {
    const productId = e.currentTarget.getAttribute("productid");
    const newCart = { ...cart };
    console.log("before cart", newCart);
    delete newCart[productId];
    console.log("after cart", newCart);
    updateCart(newCart);
    setLoading(true);
  };

  const updateMyCart = () => {
    updateCart(localCart);
  };
  const handleChange = (e) => {
    const newValue = +e.target.value;
    const productId = e.target.getAttribute("productid");
    const newLocalcart = { ...localCart, [productId]: newValue };
    setLocalCart(newLocalcart);
  };

  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <h1 className="bg-primary-light p-2">Cart Page</h1>
      <div className="flex flex-col gap-2 items-start">
        {products.map((p) => (
          <div key={p.id}>
            {p.title}
            <input
              productid={p.id}
              className="ml-2 w-16 px-2 py-1"
              type="number"
              value={localCart[p.id]}
              onChange={handleChange}
            />
            <Button productid={p.id} onClick={handleRemove}>
              <IoMdCloseCircle className="text-2xl" />
            </Button>
          </div>
        ))}
        <Button className="bg-primary-default " onClick={updateMyCart}>
          Update Cart
        </Button>
      </div>
    </>
  );
}
export default CartPage;
