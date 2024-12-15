import { useEffect, useState } from "react";
import { Link, NavLink, useParams } from "react-router-dom";
import { formatCurrency } from "../helpers/helpers";
import Loader from "../ui/Loader";

export default function ProductsDetails() {
  const { productID } = useParams("productID");
  const [currentProduct, setCurrentProduct] = useState({});
  const [isLoading, setIsLoading] = useState(false);
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
        </div>
      )}
    </div>
  );
}
