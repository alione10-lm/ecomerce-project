import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { formatCurrency } from "../helpers/helpers";
import Loader from "../ui/Loader";
import Button from "../ui/Button";
import { useDispatch } from "react-redux";
import {
  decreaseProductQuantity,
  increaseProductQuantity,
} from "../slices/productSlice";

export default function ProductsDetails() {
  const { productID } = useParams("productID");
  const [currentProduct, setCurrentProduct] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  useEffect(
    function () {
      async function getProduct() {
        try {
          setIsLoading(true);
          const res = await fetch(
            `https://fakestoreapi.in/api/products/${productID}`
          );
          const data = await res.json();
          console.log(data);
          setCurrentProduct(data.product);
        } catch (err) {
          console.error(err);
        } finally {
          setIsLoading(false);
        }
      }
      getProduct();
    },
    [productID]
  );
  return (
    <div className="md:mt-20 mt-16 px-10 md:px-20 ">
      <Link to="/app">&larr; back to products</Link>
      {isLoading ? (
        <div>
          <Loader />
        </div>
      ) : (
        <div className="md:grid flex flex-col md:grid-cols-3 ">
          <img className="col-span-1" src={currentProduct.image} alt="/" />
          <div className="col-span-1 md:col-span-2  py-16">
            <div className="mb-8 flex flex-col gap-2 ">
              <p className="text-2xl text-slate-800">{currentProduct.model}</p>
              <p className="text-slate-700 text-sm font-semibold">
                {formatCurrency(currentProduct.price)}
              </p>
            </div>
            <p className="text-stone-700 text-lg mb-2">
              {currentProduct.title}
            </p>
            <p className="text-stone-500">{currentProduct.description}</p>
          </div>
          {/* <div className="flex items-center gap-2 md:gap-4">
            <Button
              type="round"
              onClick={() =>
                dispatch(decreaseProductQuantity(currentProduct.id))
              }
            >
              -
            </Button>
            <span className="text-sm font-medium">
              {currentProduct.quantity}
            </span>
            <Button
              type="round"
              onClick={() =>
                dispatch(increaseProductQuantity(currentProduct.id))
              }
            >
              +
            </Button>
          </div> */}
        </div>
      )}
    </div>
  );
}
