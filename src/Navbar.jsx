import React from "react";
import { FiShoppingCart } from "react-icons/fi";
function Navbar() {
  return (
    <div className="py-4 bg-white">
      <div className="max-w-6xl flex justify-between items-center mx-auto">
        <img
          className="h-16"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png"
          alt=""
        />
        <FiShoppingCart className="text-4xl text-primary-default" />
      </div>
    </div>
  );
}
export default Navbar;
