import {useEffect, useContext} from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import ProductList from "./pages/ProductList/ProductList.jsx";
import Cart from "./pages/Cart/Cart.jsx";
import Favorites from "./pages/Favorites/Favorites.jsx";
import NotFound from "./pages/NotFound/NotFound.jsx";
import { actionFetchProducts } from "./store/actions.js";

import "./App.css";
import MainLayout from "./components/MainLayout/MainLayout.jsx";
import { NewThemeContext } from "./context/context.jsx";

function App() {

  const { isTheme } = useContext(NewThemeContext);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actionFetchProducts());
  }, []);

  const cart = useSelector((state) => state.cart);
  const totalPrice = useSelector((state) => state.totalPrice);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    localStorage.setItem("totalPrice", JSON.stringify(totalPrice));
    localStorage.setItem("isTheme", JSON.stringify(isTheme));
  }, [cart, totalPrice, isTheme]);

  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<ProductList />} />
          <Route path="cart" element={<Cart />} />
          <Route path="favorites/*" element={<Favorites />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
