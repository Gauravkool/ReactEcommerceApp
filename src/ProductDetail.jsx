import React from "react";
import { Link, useParams } from "react-router-dom";
import { allData } from "./data";
import { IoMdArrowRoundBack } from "react-icons/io";
function ProductDetail() {
  const params = useParams();
  const id = +params.id;

  let product;
  for (let i = 0; i < allData.length; i++) {
    const p = allData[i];
    if (id === p.id) {
      product = p;
      break;
    }
  }
  return (
    <div className="m-20">
      <Link to="/" className="text-xl mb-4 flex">
        <IoMdArrowRoundBack className="text-4xl" />
        <span>Back</span>
      </Link>
      <div className="flex gap-16">
        <div className="max-w-sm">
          <img src={product.image} alt="mug" />
        </div>
        <div className="max-w-xs flex flex-col gap-4">
          <h2 className="text-3xl font-semibold">{product.title}</h2>
          <span className="text-xl font-semibold">${product.price}</span>
          <p>{product.discription}</p>
          <div>
            <input
              className="w-8 rounded-md border border-gray-100"
              type="number"
              value="1"
            />
            <button className="text-white bg-red-500 rounded-md py-1 px-4 ml-2">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProductDetail;
