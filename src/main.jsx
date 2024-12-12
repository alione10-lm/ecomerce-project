import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import store from "./store.js";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Toaster
      containerStyle={{ backgroundColor: "131314" }}
      position="top-center"
      reverseOrder={false}
    />
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
