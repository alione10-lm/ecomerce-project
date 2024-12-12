import React from "react";
import { useParams } from "react-router-dom";

export default function ProductsDetails() {
  const { productID } = useParams("productID");
  console.log(productID);

  return <div>{<h1>product :{productID}</h1>}</div>;
}
