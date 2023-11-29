import { useEffect, useState } from "react";
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
    getProductsList().then((response) =>
      setProductList(response.data.products)
    );
    setLoading(false);
  }, []);

  const data = productList.filter((p) => {
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

  if (loading) {
    return <Loading />;
  }
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
      {data.length > 0 && <ProductList products={data} />}
      {data.length == 0 && (
        <NoMatching>no matching products, please try something else</NoMatching>
      )}
    </div>
  );
}
export default ProductListPage;
