import { LuShoppingCart } from "react-icons/lu";
import { formatCurrency } from "../../helpers/helpers";
import Spinner from "../../ui/Spinner";
import { useEffect, useState } from "react";
import { CATEGORIES_API_URL } from "../../services/config";

function ProductsByCategory() {
  const [c, setC] = useState();
  const [data, setData] = useState();
  const [isLoading, setIsloading] = useState(false);

  useEffect(function () {
    async function getP() {
      try {
        const res = await fetch(CATEGORIES_API_URL);
        const data = res.json();
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    }
    getP();
  });

  return (
    <div>
      <div className="h-[35rem] gap-y-6 py-2 justify-items-center relative overflow-scroll  w-full grid grid-cols-4">
        {isLoading && <Spinner />}
        {/* {data.map((product, ndx) => (
          <div
            key={ndx}
            className=" border border-slate-200 p-2  relative divide-stone-200 rounded-md w-72  hover:shadow-lg hover:shadow-slate-200 transition-all duration-150  flex flex-col items-center  "
          >
            <p className=" absolute text-xs bg-red-100 rounded-full px-1 text-red-700 top-1 left-1">
              {product.brand}
            </p>
            <img
              className=" cursor-pointer border-b "
              src={product.image}
              alt="/"
            />
            <div className="px-2 py-4 w-full flex flex-col ">
              <p className="text-slate-900 text-lg ">{product.model}</p>
              <p className="text-slate-600 font-semibold text-xs">
                {formatCurrency(product.price)}
              </p>
            </div>
            <button className="flex align-middle items-center justify-center  gap-3 bg-slate-800 text-slate-50 font-semibold text-sm rounded-full py-1 px-4">
              add to cart
              <LuShoppingCart />
            </button>
          </div>
        ))} */}
      </div>
    </div>
  );
}

export default ProductsByCategory;
