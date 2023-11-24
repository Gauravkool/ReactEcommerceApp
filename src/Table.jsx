import React, { useState } from "react";
import TableRow from "./TableRow";
function Table() {
  const [num, updateNum] = useState(2);
  const [upto, setUpto] = useState(10);

  let rows = [];
  for (let i = 1; i <= upto; i++) {
    rows.push(<TableRow key={i} number={num} index={i} />);
  }

  function handleChange(e) {
    let newNum = +e.target.value;
    updateNum(newNum);
  }

  function handleUptoChange(e) {
    let newUpto = +e.target.value;
    setUpto(newUpto);
  }
  return (
    <div className="p-2">
      {num > 15 ? (
        <div className="border-2 p-1 border-green-700">Well done</div>
      ) : (
        <div className="border-2 p-1 border-red-700">keep it going on</div>
      )}
      <div>
        <input
          id="table"
          type="number"
          value={num}
          onChange={handleChange}
          className="rounded-md border my-2 border-gray-300"
        />
        <input
          id="upto"
          type="number"
          value={upto}
          onChange={handleUptoChange}
          className="rounded-md border border-gray-300"
        />
      </div>
      {rows}
    </div>
  );
}
export default Table;
