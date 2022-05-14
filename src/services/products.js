import { getToken } from "./localStorage";

const BASE_URL = "https://lab-api-bq.herokuapp.com";
const token = getToken();
export const getProducts = () => {
  return fetch(`${BASE_URL}/products`, {
    method: "GET",
    headers: { "Content-Type": "application/json", Authorization: token },
  });
};
