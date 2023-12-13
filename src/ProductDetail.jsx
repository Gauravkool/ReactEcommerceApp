import React, { memo, useCallback, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { HiArrowSmLeft, HiArrowSmRight } from "react-icons/hi";
import { getProductData } from "./API";
import Loading from "./Loading";
import NotFound from "./NotFound";
import Input from "./Input";
function ProductDetail({ onAddToCart }) {
  const id = +useParams().id;
  const [product, setproduct] = useState();
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(1);
  useEffect(() => {
    getProductData(id)
      .then((product) => {
        setproduct(product);
        setLoading(false);
        setCount(1);
      })
      .catch((err) => {
        console.log("api me error aaya", err);
        setLoading(false);
      });
  }, [id]);

  const handelChangeCount = useCallback((e) => {
    setCount(+e.target.value);
  }, []);

  const handleButtonClick = useCallback(() => {
    onAddToCart(id, count);
    setCount(1);
  }, [id, count]);

  if (loading) {
    return <Loading />;
  }

  if (!product) {
    return <NotFound />;
  }
  return (
    <>
      <div className="my-5 bg-white max-w-6xl mx-auto p-5">
        <Link to="/" className="text-xl flex items-center gap-x-2">
          <HiArrowSmLeft className="text-4xl border-4 border-gray-200  rounded-full shadow-2xl" />
          <span className="text-lg font-mono font-semibold text-gray-700">
            Back
          </span>
        </Link>
        <div className="flex gap-16 my-3">
          <div className="max-w-xs aspect-square">
            <img className="w-full h-full" src={product.thumbnail} alt="mug" />
          </div>
          <div className="max-w-xs flex flex-col gap-4">
            <h2 className="text-3xl font-semibold">{product.title}</h2>
            <span className="text-xl font-semibold">${product.price}</span>
            <p className="font-mono text-gray-700 text-md">
              {product.description}
            </p>
            <div className="flex">
              <div className="w-16">
                <Input
                  className=""
                  type="number"
                  value={count}
                  onChange={handelChangeCount}
                />
              </div>
              <button
                onClick={handleButtonClick}
                className="text-white bg-primary-dark hover:bg-primary-default rounded-md py-1 px-4 ml-2">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <div>
            {id > 1 && (
              <Link
                to={"/products/" + (id - 1)}
                className="flex items-center gap-x-1">
                <HiArrowSmLeft className="text-4xl border-4 border-gray-200  rounded-full shadow-2xl " />
                <span className="text-lg font-mono font-semibold text-gray-700">
                  previous
                </span>
              </Link>
            )}
          </div>
          <div>
            <Link
              to={"/products/" + (id + 1)}
              className="flex items-center gap-x-1">
              <HiArrowSmRight className="text-4xl border-4 border-gray-200 rounded-full shadow-2xl" />
              <span className="text-lg font-mono font-semibold text-gray-700">
                next
              </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
export default memo(ProductDetail);
