import React from "react";
function TableRow({ number, index }) {
  return (
    <>
      <div className="text-xl p-2 text-indigo-700">
        {number} x {index} = {number * index}
      </div>
    </>
  );
}
export default TableRow;
