import { getToken } from "./localStorage";

const BASE_URL = "https://lab-api-bq.herokuapp.com";
const token = getToken();

export const getProducts = () => {
  return fetch(`${BASE_URL}/products`, {
    method: "GET",
    headers: { "Content-Type": "application/json", Authorization: token },
  });
};

export const createOrder = (client, table, products) => {
  return fetch(`${BASE_URL}/orders`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: token },
    body: JSON.stringify({
      client: client,
      table: table,
      products: products,
    }),
  });
};

export const getOrders = () => {
  return fetch(`${BASE_URL}/orders`, {
    method: "GET",
    headers: { "Content-Type": "application/json", Authorization: token },
  });
};
