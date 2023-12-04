import React from "react";
import { FiShoppingCart } from "react-icons/fi";
function Navbar({ productCount }) {
  return (
    <div className="py-4 bg-white">
      <div className="max-w-6xl flex justify-between items-center mx-auto">
        <img
          className="h-10"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png"
          alt=""
        />
        <div className="flex items-center relative">
          <FiShoppingCart className="text-4xl text-primary-default" />
          <span className="border-2 border-primary-default rounded-full text-primary-default hover:text-white hover:bg-primary-default absolute left-6 bottom-6 px-1 text-xs">{productCount}</span>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
