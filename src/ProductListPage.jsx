import { useCallback, useEffect, useMemo, useState } from "react";
import ProductList from "./ProductList";
import { getProductsList } from "./API";
import NoMatching from "./Nomatching";
import Loading from "./Loading";
import Input from "./Input";
import { range } from "lodash";
import { Link, useSearchParams } from "react-router-dom";
function ProductListPage() {
  const [productData, setProductData] = useState();
  const [loading, setLoading] = useState(true);

  let [searchParams, setSearchParams] = useSearchParams();
  const params = Object.fromEntries([...searchParams]);
  let { sort, query, page } = params;
  page = +page || 1;
  sort = sort || "default";
  query = query || "";

  useEffect(() => {
    let sortBy;
    let sortType;

    if (sort == "title") {
      sortBy = "title";
    } else if (sort == "priceLow") {
      sortBy = "price";
    } else if (sort == "priceHigh") {
      sortBy = "price";
      sortType = "desc";
    }

    getProductsList(sortBy, query, page, sortType).then((body) => {
      setProductData(body);
      setLoading(false);
    });
  }, [sort, query, page]);

  const handleQueryChange = useCallback((e) => {
    setSearchParams(
      { ...params, query: e.target.value, page: 1 },
      { replace: false }
    );
  }, []);

  const handleSortChange = useCallback((e) => {
    setSearchParams({ ...params, sort: e.target.value }, { replace: false });
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <div className="max-w-6xl bg-white mx-auto px-9 py-12.5 my-16">
        <div className="flex justify-end mb-2">
          <Input
            value={query}
            type="text"
            placeholder="Search"
            className="rounded-md border px-3 py-2 border-gray-200"
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

        {productData.data.length > 0 && (
          <ProductList products={productData.data} />
        )}
        {/* {data.length == 0 && (
        <NoMatching>No matching products, please try something else</NoMatching>
      )} */}
      </div>
      <span className="ml-24 flex space-x-1">
        {range(1, productData.meta.last_page + 1).map((pageNo) => (
          <Link
            to={"?" + new URLSearchParams({ ...params, page: pageNo })}
            className={
              "px-3 text-md font-semibold py-2 " +
              (page === pageNo ? "bg-primary-light" : "bg-primary-default")
            }
            key={pageNo}
            onClick={() => setPage(pageNo)}>
            {pageNo}
          </Link>
        ))}
      </span>
    </div>
  );
}
export default ProductListPage;
