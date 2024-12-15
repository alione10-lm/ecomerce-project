import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Applayout from "./components/Applayout";
import ProductsDetails from "./components/ProductsDetails";
import ProductsCart from "./pages/ProductsCart";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import User from "./pages/User";
import Notifications from "./pages/Notifications";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import OrderPage from "./pages/OrderPage";
import Login from "./pages/Login";
import ProductsPage from "./pages/ProductsPage";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60,
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="home" element={<Home />}></Route>
          <Route path="*" element={<PageNotFound />} />
          <Route path="app" element={<Applayout />}>
            <Route index element={<Navigate to={"products"} replace />}></Route>
            <Route path="products" element={<ProductsPage />}></Route>
            <Route path="categories" element={<p>Application Categories</p>} />
            <Route path="cart" element={<ProductsCart />} />
            <Route path="products/:productID" element={<ProductsDetails />} />
            <Route path="user" element={<User />} />
            <Route path="notifications" element={<Notifications />} />
            <Route path="order" element={<OrderPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
