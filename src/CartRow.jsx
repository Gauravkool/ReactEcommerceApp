import React from "react";
import { IoMdCloseCircle } from "react-icons/io";
import Input from "./Input";
import Button from "./Button";
function CartRow({ product, quantity, onQuantityChange, onRemove }) {
  const handleChange = (e) => {
    onQuantityChange(product.id, +e.target.value);
  };

  const handleRemove = () => {
    onRemove(product.id);
  };
  return (
    <div className="flex items-center space-x-4 px-4 py-3 border border-gray-100">
      <span className="w-10 h-10 flex items-center text-gray-500">
        <Button className="bg-gray-100 text-gray-400" onClick={handleRemove}>
          <IoMdCloseCircle />
        </Button>
      </span>
      <div className="w-10 h-10">
        <img
          className="w-full h-full object-cover"
          src={product.thumbnail}
          alt=""
        />
      </div>
      <h3 className="grow text-primary-dark font-semibold">{product.title}</h3>
      <span className="w-20">${product.price}</span>
      <div className="w-32">
        <div className="w-12">
          <Input
            type="number"
            className="px-2 py-1"
            value={quantity}
            onChange={handleChange}
          />
        </div>
      </div>
      <span className="w-20">${product.price * quantity}</span>
    </div>
  );
}
export default CartRow;
