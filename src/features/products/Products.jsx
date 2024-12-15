import { PRODUCTS_API_URl } from "../../services/config";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, getProducts } from "../../slices/productSlice";
import toast from "react-hot-toast";
import { formatCurrency } from "../../helpers/helpers";
import { LuShoppingCart } from "react-icons/lu";
import Loader from "../../ui/Loader";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Button from "../../ui/Button";

export default function Products() {
  const navigate = useNavigate();

  const PRODUCTS = useSelector((state) => state.products.products);

  const ProductsIncart = useSelector((state) => state.products.cart);

  const dispatch = useDispatch();

  function handleAddToCart(product) {
    const newPoduct = {
      ...product,
      quantity: 1,
      totalPrice: product.price,
    };

    dispatch(addToCart(newPoduct));
    toast.success("product added  successfuly");
  }

  const { isPending, error } = useQuery({
    queryKey: ["products"],
    queryFn: () =>
      fetch(PRODUCTS_API_URl)
        .then((res) => res.json())
        .then((data) => dispatch(getProducts(data.products))),
  });

  if (error) toast.error("failed to fetch");

  function ProductOverview(productID) {
    navigate(`${productID}`);
  }

  return (
    <div>
      <div className="h-[35rem]  md:grid-cols-4 gap-y-6 py-2 justify-items-center relative overflow-scroll  w-full grid grid-cols-1 sm:grid-cols-2">
        {isPending && <Loader />}
        {PRODUCTS.map((product, ndx) => (
          <div
            key={ndx}
            className=" border border-slate-200 p-2  relative divide-stone-200 rounded-md w-72  hover:shadow-lg hover:shadow-slate-200 transition-all duration-150  flex flex-col items-center  "
          >
            <p className=" absolute text-xs bg-yellow-100 rounded-full px-1 text-yellow-700 top-1 left-1">
              {product.brand}
            </p>
            <div className=" min-h-[15rem] max-h-[15rem]  overflow-hidden ">
              <img
                onClick={() => ProductOverview(product.id)}
                className=" cursor-pointer  max-h-[15rem] "
                src={product.image}
                alt="/"
              />
            </div>
            <div className="px-2 border-t py-4 w-full flex flex-col ">
              <p className="text-slate-900 truncate text-lg">{product.model}</p>
              <p className="text-slate-600 font-semibold text-xs">
                {formatCurrency(product.price)}
              </p>
            </div>
            {ProductsIncart.length === 0 && (
              <Button
                type="xs"
                key={product.id}
                onClick={() => handleAddToCart(product)}
              >
                add to cart
                <LuShoppingCart />
              </Button>
            )}
          </div>
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
