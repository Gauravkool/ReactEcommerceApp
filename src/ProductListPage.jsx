import { useCallback, useEffect, useMemo, useState } from "react";
import ProductList from "./ProductList";
import { getProductsList } from "./API";
import NoMatching from "./Nomatching";
import Loading from "./Loading";

function ProductListPage() {
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("default");
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProductsList().then((products) => setProductList(products));
    setLoading(false);
  }, []);

  const data = useMemo(() => {
    const filterData = productList.filter((p) => {
      const lowerCaseTitle = p.title.toLowerCase();
      const lowerCaseQuery = query.toLowerCase();
      return lowerCaseTitle.indexOf(lowerCaseQuery) != -1;
    });

    const sortedData = [...filterData];
    
    if (sort == "priceLow") {
      sortedData.sort((a, b) => a.price - b.price);
    } else if (sort == "priceHigh") {
      sortedData.sort((a, b) => b.price - a.price);
    } else if (sort == "title") {
      sortedData.sort((a, b) => (a.title > b.title ? 1 : -1));
    }
    return sortedData;
  }, [query, productList, sort]);

  const handleQueryChange = useCallback((e) => {
    setQuery(e.target.value);
  }, []);

  const handleSortChange = useCallback((e) => {
    console.log("sorted value", e.target.value);
    setSort(e.target.value);
  }, []);

  if (loading) {
    return <Loading />;
  }
  return (
    <div className="max-w-6xl bg-white mx-auto px-9 py-12.5 my-16">
      <div className="flex justify-end mb-2">
        <input
          value={query}
          type="text"
          placeholder="Search"
          className="rounded-md border p-2 border-gray-200"
          onChange={handleQueryChange}
        />
        <select
          value={sort}
          onChange={handleSortChange}
          className="border border-gray-200 rounded-md p-2 mb-2 ml-2">
          <option value="default">Default sort</option>
          <option value="title">Sort by Title</option>
          <option value="priceLow">Sort by price low to high</option>
          <option value="priceHigh">Sort by price high to low</option>
        </select>
      </div>

      {data.length > 0 && <ProductList products={data} />}
      {/* {data.length == 0 && (
        <NoMatching>No matching products, please try something else</NoMatching>
      )} */}
    </div>
  );
}
export default ProductListPage;
