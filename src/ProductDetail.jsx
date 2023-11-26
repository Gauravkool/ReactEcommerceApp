import React from "react";
function ProductDetail() {
  return (
    <>
      <div className="flex gap-16 mx-48 my-20">
        <div className="max-w-sm">
          <img
            src="https://m.media-amazon.com/images/I/51f39cB-ptL._AC_UF894,1000_QL80_.jpg"
            alt="mug"
          />
        </div>
        <div className="max-w-xs flex flex-col gap-4">
          <h2 className="text-3xl font-semibold">Black Printed Coffee Mug</h2>
          <span className="text-xl font-semibold">$15.00</span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe
            ratione in ipsum sequi nulla nisi soluta reiciendis quisquam cumque
            qui.
          </p>
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
    </>
  );
}
export default ProductDetail;
