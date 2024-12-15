import toast from "react-hot-toast";
import { formatCurrency } from "../../helpers/helpers";
import { addToCart } from "../../slices/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LuShoppingCart } from "react-icons/lu";
import Button from "../../ui/Button";

function ProductsItem({ product }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function ProductOverview(productID) {
    navigate(`${productID}`);
  }

  function handleAddToCart(product) {
    const newPoduct = {
      ...product,
      quantity: 1,
      totalPrice: product.price,
    };

    dispatch(addToCart(newPoduct));
    toast.success("product added  successfuly");
  }

  // const getCurrentQunatityById = (id) => (state) =>
  //   state.products.cart.find((item) => item.id === id)?.isInCart ?? true;
  // const currentQuantity = useSelector(getCurrentQunatityById(1));
  // const isInCart = currentQuantity > 0;

  return (
    <div className=" border border-slate-200 p-2  relative divide-stone-200 rounded-md w-72  hover:shadow-lg hover:shadow-slate-200 transition-all duration-150  flex flex-col items-center  ">
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
      <Button
        type="xs"
        key={product.id}
        onClick={() => handleAddToCart(product)}
      >
        add to cart
        <LuShoppingCart />
      </Button>
    </div>
  );
}

export default ProductsItem;
