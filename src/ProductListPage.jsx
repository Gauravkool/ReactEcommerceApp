import { useState } from "react";
import ProductList from "./ProductList";
import { allData } from "./data";

function ProductListPage() {
  console.log("App component is runnig");
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("default");

  const data = allData.filter((p) => {
    const lowerCaseTitle = p.title.toLowerCase();
    const lowerCaseQuery = query.toLowerCase();
    return lowerCaseTitle.indexOf(lowerCaseQuery) != -1;
  });

  if (sort == "priceLow") {
    data.sort((a, b) => a.price - b.price);
  } else if (sort == "priceHigh") {
    data.sort((a, b) => b.price - a.price);
  } else if (sort == "title") {
    data.sort((a, b) => (a.title > b.title ? 1 : -1));
  }
  const handleQueryChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSortChange = (e) => {
    console.log("sorted value", e.target.value);
    setSort(e.target.value);
  };
  return (
    <div className="p-24 flex flex-col">
      <div className="mb-2">
        <input
          value={query}
          type="text"
          placeholder="Search"
          className="rounded-md border p-2 border-green-500"
          onChange={handleQueryChange}
        />
        <select
          value={sort}
          onChange={handleSortChange}
          className="border border-green-500 rounded-md p-2 ml-2">
          <option value="default">Default sort</option>
          <option value="title">Sort by Title</option>
          <option value="priceLow">Sort by price low to high</option>
          <option value="priceHigh">Sort by price high to low</option>
        </select>
      </div>
      <ProductList products={data} />
    </div>
  );
}
export default ProductListPage;
