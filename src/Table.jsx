import React, { useState } from "react";
import TableRow from "./TableRow";
function Table() {
  const [num, updateNum] = useState(2);
  function handleClick() {
    updateNum(num + 1);
  }
  return (
    <div className="p-2">
      <button
        className="bg-indigo-700 text-white py-1 px-2 rounded-md"
        onClick={handleClick}>
        Next
      </button>
      <TableRow number={num} index={1} />
      <TableRow number={num} index={2} />
      <TableRow number={num} index={3} />
      <TableRow number={num} index={4} />
    </div>
  );
}
export default Table;
