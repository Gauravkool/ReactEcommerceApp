import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { HiArrowSmLeft, HiArrowSmRight } from "react-icons/hi";
import { getProductData } from "./API";
import Loading from "./Loading";
function ProductDetail() {
  const id = +useParams().id;
  const [product, setproduct] = useState();
  useEffect(() => {
    getProductData(id).then((response) => setproduct(response.data));
  }, [id]);

  return (
    <>
      {product ? (
        <>
          <div className="m-10 bg-white p-10">
            <Link to="/" className="text-xl mb-4 flex">
              <HiArrowSmLeft className="text-4xl" />
              <span>Back</span>
            </Link>
            <div className="flex gap-16">
              <div className="max-w-sm">
                <img src={product.thumbnail} alt="mug" />
              </div>
              <div className="max-w-xs flex flex-col gap-4">
                <h2 className="text-3xl font-semibold">{product.title}</h2>
                <span className="text-xl font-semibold">${product.price}</span>
                <p>{product.description}</p>
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
          <div className="flex justify-between px-10">
            <div>
              {id > 1 && (
                <Link to={"/products/" + (id - 1)} className="flex">
                  <HiArrowSmLeft className="text-2xl" />
                  <span>previous</span>
                </Link>
              )}
            </div>
            <div>
              <Link to={"/products/" + (id + 1)} className="flex">
                <HiArrowSmRight className="text-2xl" />
                <span>next</span>
              </Link>
            </div>
          </div>
        </>
      ) : (
        <Loading />
      )}
    </>
  );
}
export default ProductDetail;
