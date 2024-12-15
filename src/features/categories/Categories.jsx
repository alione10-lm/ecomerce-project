import { useQuery } from "@tanstack/react-query";
import { CATEGORIES_API_URL } from "../../services/config";
import toast from "react-hot-toast";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getProducts } from "../../slices/productSlice";
import Loader from "../../ui/Loader";

function Categories() {
  const [category, setCatgeory] = useState("");
  const dispatch = useDispatch();

  // const {
  //   data: CATEGORIES,
  //   error,
  //   isLoading: isLoadinCategories,
  // } = useQuery({
  //   queryKey: ["categories"],
  //   queryFn: () => fetch(CATEGORIES_API_URL).then((res) => res.json()),
  // });

  const CATEGORIES = ["tv", "audio", "laptop", "mobile", "gaming", "appliaces"];
  // if (error) toast.error("falied to fetch");
  const { isLoading: isLoadingNewProducts } = useQuery({
    queryKey: ["filterdata", category],
    queryFn: async () => {
      if (!category) return;
      const res = await fetch(`${CATEGORIES_API_URL}?type=${category}`);
      const data = await res.json();
      console.log(data);
      dispatch(getProducts(data.products));
    },
  });

  // if (isLoadingNewProducts) return <p>loading ...</p>;
  // if (isLoadinCategories) return;

  return (
    <div className="flex items-center gap-5 justify-between w-full   border-slate-200">
      {isLoadingNewProducts && <Loader />}
      <select
        onChange={(e) => setCatgeory(e.target.value)}
        className="bg-white p-1"
      >
        <option value="">select a category</option>
        {CATEGORIES.map((category, ndx) => (
          // {CATEGORIES.categories.map((category, ndx) => (
          <option value={category} key={ndx}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Categories;
