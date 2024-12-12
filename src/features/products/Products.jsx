import { useEffect, useState } from "react";
import { CATEGORIES_API_URL, PRODUCTS_API_URl } from "../../services/config";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, getProducts, removeFromCart } from "../../productSlice";
import toast from "react-hot-toast";
import { formatCurrency } from "../../helpers/helpers";
import { LuFilter, LuShoppingCart } from "react-icons/lu";
import Loader from "../../ui/Loader";

export default function Products() {
  const [isLoading, setIsLoading] = useState(false);
  const PRODUCTS = useSelector((state) => state.products);

  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState();

  const dispatch = useDispatch();

  function handleAddToCart(product) {
    dispatch(addToCart(product));
    toast.success("product added  successfuly");
  }
  function handleRemoveFromCart(product) {
    dispatch(removeFromCart(product));
    toast.success("product removed");
  }

  useEffect(
    function () {
      async function fetchData() {
        try {
          setIsLoading(true);
          const res = await fetch(PRODUCTS_API_URl);
          const data = await res.json();
          const products = data.products.map((element) => {
            return { ...element, isInCart: false };
          });
          dispatch(getProducts(products));
        } catch (err) {
          console.log(err.message);
        } finally {
          setIsLoading(false);
        }
      }
      fetchData();
    },
    [dispatch]
  );
  useEffect(function () {
    async function getCategories() {
      try {
        const res = await fetch(CATEGORIES_API_URL);
        const data = await res.json();
        console.log(data.categories);
        setCategories(data.categories);
      } catch (err) {
        console.log(err.message);
      } finally {
        // setIsLoading(false);
      }
    }
    getCategories();
  }, []);

  console.log(category);

  useEffect(
    function () {
      if (!category) return;
      async function getProductsByCategories() {
        setIsLoading(true);
        try {
          const res = await fetch(`${CATEGORIES_API_URL}?type=${category}`);
          const data = await res.json();
          console.log(data);
          dispatch(getProducts(data.products));
        } catch (err) {
          console.log(err);
        } finally {
          setIsLoading(false);
        }
      }
      getProductsByCategories();
    },
    [category, dispatch]
  );
  return (
    <div className="flex flex-col w-full  divide-y  px-10 mt-20 ">
      <div className="flex  items-center w-full justify-between shadow-sm py-1">
        <h1 className="text-slate-800 font-semibold text-xl">
          welcome back, #{" "}
        </h1>
        <form>
          <input
            type="text"
            className="bg-slate-100"
            placeholder="search for a product"
          />
          <button>search</button>
        </form>
        <div className="flex items-center gap-5 border border-slate-200">
          <label>categories :</label>
          <select
            onChange={(e) => setCategory(e.target.value)}
            value={category}
          >
            <option value=""> select a category</option>
            {categories.map((category, ndx) => (
              <option value={category} className="bg-slate-100" key={ndx}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <div className="flex items-center">
          <label className="flex items-center">
            <LuFilter />
            filter :
          </label>
          <select>
            <option> default</option>
            <option>price</option>
          </select>
        </div>
      </div>
      <div className="h-[35rem]  md:grid-cols-4 gap-y-6 py-2 justify-items-center relative overflow-scroll  w-full grid grid-cols-1 sm:grid-cols-2">
        {isLoading && <Loader />}
        {PRODUCTS.map((product, ndx) => (
          <div
            key={ndx}
            className=" border border-slate-200 p-2  relative divide-stone-200 rounded-md w-72  hover:shadow-lg hover:shadow-slate-200 transition-all duration-150  flex flex-col items-center  "
          >
            <p className=" absolute text-xs bg-red-100 rounded-full px-1 text-red-700 top-1 left-1">
              {product.brand}
            </p>
            <div className=" min-h-[15rem] max-h-[15rem]  overflow-hidden ">
              <img
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
            {!product.isInCart ? (
              <button
                onClick={() => handleAddToCart(product)}
                className="flex   align-middle items-center justify-center  gap-3 hover:bg-slate-700 transition-colors duration-150 bg-slate-800 text-slate-50 font-semibold text-sm rounded-full py-1 px-4"
              >
                add to cart
                <LuShoppingCart />
              </button>
            ) : (
              <button
                onClick={() => handleRemoveFromCart(product)}
                className="flex  align-middle items-center justify-center  gap-3 bg-red-200 hover:bg-red-100 transition-all duration-150 text-red-600 font-semibold text-sm rounded-full py-1 px-4"
              >
                remove from cart
              </button>
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
