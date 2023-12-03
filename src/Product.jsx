import React from "react";
import { Link } from "react-router-dom";
import { IoIosStarOutline } from "react-icons/io";
function Product({ title, category, thumbnail, price, id, rating }) {
  return (
    <>
      <div className="max-w-xs">
        <div className="w-full aspect-square">
          <img
            className="w-full h-full object-cover"
            src={thumbnail}
            alt="picture"
          />
        </div>
        <div className="gap-0.5 flex flex-col mt-1">
          <div className="text-gray-700 text-xs">{category}</div>
          <div className="font-semibold text-sm ">{title}</div>
          <span className="flex text-primary-light">
            <IoIosStarOutline />
            <IoIosStarOutline />
            <IoIosStarOutline />
            <IoIosStarOutline />
          </span>

          <div className="font-bold text-sm">${price}</div>
          <Link
            className="bg-primary-dark self-start hover:bg-primary-default text-white px-2 py-1 rounded-md text-sm"
            to={"products/" + id}>
            View Details
          </Link>
        </div>
      </div>
    </>
  );
}
export default Product;
