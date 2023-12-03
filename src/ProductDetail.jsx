import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { HiArrowSmLeft, HiArrowSmRight } from "react-icons/hi";
import { getProductData } from "./API";
import Loading from "./Loading";
import NotFound from "./NotFound";
function ProductDetail() {
  const id = +useParams().id;
  const [product, setproduct] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getProductData(id)
      .then((product) => {
        setproduct(product);
        setLoading(false);
        return 10;
      })
      .catch((err) => {
        console.log("api me error aaya", err);
        setLoading(false);
        return 20;
      })
      .then((data) => console.log("data is ", data));
  }, [id]);

  if (loading) {
    return <Loading />;
  }

  if (!product) {
    return <NotFound />;
  }
  return (
    <>
      <div className="my-5 bg-white max-w-6xl mx-auto p-5">
        <Link to="/" className="text-xl flex">
          <HiArrowSmLeft className="text-4xl" />
          <span>Back</span>
        </Link>
        <div className="flex gap-16 my-3">
          <div className="max-w-xs aspect-square">
            <img className="w-full h-full" src={product.thumbnail} alt="mug" />
          </div>
          <div className="max-w-xs flex flex-col gap-4">
            <h2 className="text-3xl font-semibold">{product.title}</h2>
            <span className="text-xl font-semibold">${product.price}</span>
            <p>{product.description}</p>
            <div>
              <input
                className="w-8 rounded-md border border-gray-200"
                type="number"
                value="1"
              />
              <button className="text-white bg-primary-dark hover:bg-primary-default rounded-md py-1 px-4 ml-2">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <div>
            {id > 1 && (
              <Link to={"/products/" + (id - 1)} className="flex items-center">
                <HiArrowSmLeft className="text-2xl " />
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
      </div>
    </>
  );
}
export default ProductDetail;
