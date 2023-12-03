import axios from "axios";

export const getProductData = (id) => {
  return axios
    .get("https://dummyjson.com/products/" + id)
    .then((response) => response.data);
};
export const getProductsList = () => {
  return axios
    .get("https://dummyjson.com/products")
    .then((response) => response.data.products);
};
