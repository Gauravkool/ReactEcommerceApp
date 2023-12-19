// import React, { memo } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { useContext } from "react";
import { UserContext } from "./Contexts";
import { withCart } from "./withProvider";

function Navbar({ cartCount, setCart }) {
  const { setUser } = useContext(UserContext);
  const handleLogoutUser = () => {
    setUser(undefined);
    localStorage.removeItem("token");
    localStorage.removeItem("myCart");
    // setCart({});
  };
  return (
    <div className="py-4 bg-white">
      <div className="max-w-6xl flex justify-between items-center mx-auto">
        <div>
          <Link to="/">
            <img
              className="h-10"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png"
              alt=""
            />
          </Link>
        </div>
        <div className="flex items-center relative">
          <Link to="cart">
            <FiShoppingCart className="text-4xl text-primary-default" />
          </Link>

          <span className="border-2 border-primary-default rounded-full text-primary-default hover:text-white hover:bg-primary-default absolute left-6 bottom-6 px-1 text-xs">
            {cartCount}
          </span>
          <span className="ml-5 text-2xl text-primary-dark cursor-pointer">
            <FaRegUserCircle onClick={handleLogoutUser} />
          </span>
        </div>
      </div>
    </div>
  );
}
export default withCart(Navbar);
