import React from "react";
import { Link } from "react-router-dom";
function Product({ title, category, image, price , id}) {
  
  return (
    <>
      <div className="w-60 flex flex-col bg-white rounded-md p-2 space-y-4">
        <div className="w-full h-60">
          <img
            className="w-full h-full object-cover"
            src={image}
            alt="picture"
          />
        </div>
        <div className="space-y-1 flex flex-col">
          <div className="text-gray-600 text-xs">{category}</div>
          <div className="font-semibold text-sm">{title}</div>
          <div className="text-indigo-900 text-xs">{price}</div>
          <span className="grow"></span>
          <Link
            className="bg-red-500 self-start hover:bg-red-400 text-white px-2 py-1 rounded-md text-xs"
            to={"products/" + id}>
            View Details
          </Link>
        </div>
      </div>
    </>
  );
}
export default Product;
