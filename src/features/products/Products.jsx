import { PRODUCTS_API_URl } from "../../services/config";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../slices/productSlice";
import toast from "react-hot-toast";
import Loader from "../../ui/Loader";
import { useQuery } from "@tanstack/react-query";
import CartItem from "../Cart/CartItem";
import ProductsItem from "./ProductsItem";

export default function Products() {
  const PRODUCTS = useSelector((state) => state.products.products);
  const dispatch = useDispatch();

  // const ProductsIncart = useSelector((state) => state.products.cart);

  const { isPending, error } = useQuery({
    queryKey: ["products"],
    queryFn: () =>
      fetch(PRODUCTS_API_URl)
        .then((res) => res.json())
        .then((data) => dispatch(getProducts(data.products))),
  });

  if (error) toast.error("failed to fetch");

  return (
    <div>
      <div className="h-[35rem]  md:grid-cols-4 gap-y-6 py-2 justify-items-center relative overflow-scroll  w-full grid grid-cols-1 sm:grid-cols-2">
        {isPending && <Loader />}
        {PRODUCTS.map((product, ndx) => (
          <ProductsItem product={product} ndx={ndx} key={ndx} />
        ))}
      </div>
      <div>
        <p>
          <span className="font-semibold ">{PRODUCTS.length} </span>
          Prodcut
        </p>
      </div>
    </div>
  );
}
