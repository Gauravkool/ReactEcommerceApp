import React from "react";
function Product({ title, category, image, price }) {
  return (
    <>
      <div className="w-60 bg-white rounded-md p-2">
        <div className="w-full h-60">
          <img className="w-full h-full object-cover" src={image} alt="picture" />
        </div>
        <div className="text-gray-600 text-xs">{category}</div>
        <div className="font-semibold text-sm">{title}</div>
        <div className="text-indigo-900 text-xs">{price}</div>
      </div>
    </>
  );
}
export default Product;
