import { PRODUCTS_API_URl } from "./config";

export default async function getProducts() {
  try {
    const res = await fetch(PRODUCTS_API_URl);
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err.message);
  }
}
