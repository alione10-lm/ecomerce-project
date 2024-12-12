import { FaReact } from "react-icons/fa";
import { LuBell, LuCircleUser, LuShoppingCart } from "react-icons/lu";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  const cartLenght = useSelector((state) => state.cart).length;
  return (
    <div className="fixed w-full justify-between  z-50 px-10 top-0 flex gap-10  bg-slate-800 border-b border-slate-200 items-center ">
      <div className="flex gap-8">
        <NavLink to={"products"}>
          <FaReact size={48} color="#58c4dc" className="animate-spin " />
        </NavLink>
      </div>
      <div className="flex gap-4">
        <NavLink
          to="notifications"
          className="relative p-2   bg-slate-700 transition-all duration-150 rounded-full"
        >
          <LuBell />
          <span className="text-xs absolute top-0 right-0 bg-red-200 text-red-700 p-0.5 rounded-full w-4 flex items-center justify-center h-4">
            #
          </span>
        </NavLink>
        <NavLink
          to="cart"
          className="relative p-2  bg-slate-700 transition-all duration-150 rounded-full"
        >
          <span className="text-xs absolute top-0 right-0 bg-red-200 text-red-700 p-0.5 rounded-full w-4 flex items-center justify-center h-4">
            {cartLenght}
          </span>
          <LuShoppingCart />
        </NavLink>
        <NavLink
          to="user"
          className="relative p-2   bg-slate-700 transition-all duration-150 rounded-full"
        >
          <LuCircleUser />
        </NavLink>
      </div>
    </div>
  );
}
