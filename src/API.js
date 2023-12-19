import axios from "axios";

export const getProductData = (id) => {
  return axios
    .get("https://myeasykart.codeyogi.io/product/" + id)
    .then((response) => response.data);
};

export const getProductsByIds = (Ids) => {
  const commaSeperatedIds = Ids.join();
  return axios
    .get("https://myeasykart.codeyogi.io/products/bulk", {
      params: {
        ids: commaSeperatedIds,
      },
    })
    .then((res) => res.data);
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

export const saveCart = (cart) => {
  return axios
    .post(
      "https://myeasykart.codeyogi.io/carts",
      { data: cart },
      {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      }
    )
    .then((res) => res.data);
};

export const getCart = () => {
  return axios
    .get("https://myeasykart.codeyogi.io/carts", {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    })
    .then((res) => res.data);
};
