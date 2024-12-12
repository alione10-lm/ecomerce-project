import {
  BrowserRouter,
  Navigate,
  NavLink,
  Route,
  Routes,
} from "react-router-dom";
import Applayout from "./components/Applayout";
import ProductsDetails from "./components/ProductsDetails";
import Products from "./features/products/Products";
import ProductsCart from "./pages/ProductsCart";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <p>Home Page</p>
              <NavLink to={"app"} children={<h3>App &rarr;</h3>} />
            </>
          }
        ></Route>
        <Route path="app" element={<Applayout />}>
          <Route index element={<Navigate to={"products"} replace />}></Route>
          <Route path="products" element={<Products />}></Route>
          <Route path="categories" element={<p>Application Categories</p>} />
          <Route path="cart" element={<ProductsCart />} />
          <Route path=":productID" element={<ProductsDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
