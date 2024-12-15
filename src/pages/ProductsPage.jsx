import { useSelector } from "react-redux";
import Categories from "../features/categories/Categories";
import Products from "../features/products/Products";
import Button from "../ui/Button";

export default function ProductsPage() {
  const users = useSelector((state) => state.users.users);
  const username = users.at(0).username;

  return (
    <div className="flex flex-col w-full  divide-y  px-10 mt-16 ">
      <div className="flex  items-center w-full justify-between shadow-sm py-1">
        <h1 className="text-slate-600 font-semibold text-xl">
          welcome back, {username}
        </h1>
        <form className="flex gap-2 items-center">
          <input className="input" type="text" />
          <Button type="small">search</Button>
        </form>
        <div className="flex   items-start w-fit justify-between px-2  ">
          <Categories />
          <div className="flex justify-between w-full items-center">
            <select className="bg-white p-1">
              <option> sort by (default)</option>
              <option>sort by (price ⬆) </option>
              <option>sort by (price ⬇)</option>
            </select>
          </div>
        </div>
      </div>
      <Products />
    </div>
  );
}
