import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Button from "../../ui/Button";
import {
  decreaseProductQuantity,
  increaseProductQuantity,
} from "../../slices/productSlice";
import { formatCurrency, TotalCartPrice } from "../../helpers/helpers";

function Cart() {
  const cart = useSelector((state) => state.products.cart);
  const dispatch = useDispatch();

  return (
    <div className=" mt-20 px-10  md:px-40 relative   w-full ">
      <div className="flex justify-between items-center">
        <div>
          <NavLink
            to={"/app/products"}
            className="hover:underline transition-all hover:underline-offset-2   duration-150 text-slate-600"
          >
            &larr;back to products
          </NavLink>
          <h1 className="mb-4">your cart , #username</h1>
        </div>
        {TotalCartPrice(cart) === 0 ? (
          ""
        ) : (
          <div className="flex items-center gap-8">
            <Button to="/app/order" type="small">
              order products
            </Button>
            <h1>
              total price :
              <span className="bg-yellow-100 text-yellow-700 font-semibold text-sm p-1 rounded-md">
                {formatCurrency(TotalCartPrice(cart))}
              </span>
            </h1>
          </div>
        )}
      </div>
      <div className="w-full divide-y overflow-y-scroll  flex flex-col h-[35rem]">
        {cart.map((el, ndx) => (
          <div key={ndx} className="flex gap-4">
            <img className="w-36" src={el.image} alt="/" />
            <div className="flex w-full justify-between flex-col py-3">
              <div className="">
                <p className="text-slate-900  mb-2 text-lg">{el.model}</p>
                <p className="text-slate-600  text-sm font-semibold">
                  {formatCurrency(Number(el.totalPrice))}
                </p>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 md:gap-4">
                  <Button
                    type="round"
                    onClick={() => dispatch(decreaseProductQuantity(el.id))}
                  >
                    -
                  </Button>
                  <span className="text-sm font-medium">{el.quantity}</span>
                  <Button
                    type="round"
                    onClick={() => dispatch(increaseProductQuantity(el.id))}
                  >
                    +
                  </Button>
                </div>
                {/* <p>
                  total price :
                  <span className="bg-yellow-100 text-yellow-700 font-semibold text-sm p-1 rounded-md">
                    {formatCurrency(Number(el.quantity) * Number(el.price))}
                  </span>
                </p> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cart;
