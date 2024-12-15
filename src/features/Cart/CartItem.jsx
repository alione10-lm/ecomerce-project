import { useDispatch } from "react-redux";
import { formatCurrency } from "../../helpers/helpers";
import Button from "../../ui/Button";
import {
  decreaseProductQuantity,
  increaseProductQuantity,
} from "../../slices/productSlice";

function CartItem({ el }) {
  const dispatch = useDispatch();
  return (
    <div className="flex gap-4">
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
        </div>
      </div>
    </div>
  );
}

export default CartItem;
