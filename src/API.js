import axios from "axios";

export const getProductData = (id) => {
  return axios
    .get("https://dummyjson.com/products/" + id)
    .then((response) => response.data);
};
export const getProductsList = (sortBy, search, page, sortType) => {
  let params = {};
  if (sortBy) {
    params.sortBy = sortBy;
  }
  if (search) {
    params.search = search;
  }
  if (page) {
    params.page = page;
  }
  if (sortType) {
    params.sortType = sortType;
  }
  return axios
    .get("https://myeasykart.codeyogi.io/products", {
      params,
    })
    .then((response) => response.data);
};


// {range(1, productData.meta.last_page + 1).map((item) => (
//   <Button
//     className="mb-4 px-3 rounded-none mr-1"
//     key={item}
//     onClick={() => setPage(item)}>
//     {item}
//   </Button>
// ))}