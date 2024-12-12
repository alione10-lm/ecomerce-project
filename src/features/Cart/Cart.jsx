import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

function Cart() {
  const cart = useSelector((state) => state.cart);

  return (
    <div className=" p-20 h-screen w-full">
      <NavLink
        to={"/app/products"}
        className="hover:underline transition-all hover:underline-offset-2   duration-150 text-slate-600"
      >
        &larr;back to products{" "}
      </NavLink>
      <h1 className="mb-4">your cart , #username</h1>
      {cart.map((el, ndx) => (
        <div key={ndx} className=" gap-4">
          <img className="w-36" src={el.image} alt="/" />
          <p>{el.title}</p>
          <p>{el.id}</p>
        </div>
      ))}
    </div>
  );
}

export default Cart;
