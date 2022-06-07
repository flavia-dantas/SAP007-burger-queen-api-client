import { getToken } from "./localStorage";

const BASE_URL = "https://lab-api-bq.herokuapp.com";

export const getProducts = () => {
  return fetch(`${BASE_URL}/products`, {
    method: "GET",
    headers: { "Content-Type": "application/json", Authorization: getToken()},
  });
};

export const createOrder = (client, table, products) => {
  return fetch(`${BASE_URL}/orders`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: getToken()},
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
    headers: { "Content-Type": "application/json", Authorization: getToken()},
  });
};

export const updateOrders = (orderId, status) => {
  return fetch(`${BASE_URL}/orders/${orderId}`, {
  method: "PUT",
  headers: { "Content-Type": "application/json", Authorization: getToken()},
  body: JSON.stringify({status})
  });
};
