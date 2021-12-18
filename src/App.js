import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { sendCartData } from "./store/cartActions";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
let initial = true;
function App() {
  const dispatch = useDispatch();
  const showModalSelector = useSelector((state) => state.ui.showModal);
  const cart = useSelector((state) => state.cart);

  console.log(cart.cartChanged);

  useEffect(() => {
    if (initial) {
      initial = false;
      return;
    }
    console.log("asd");
    if (cart.cartChanged) {
      dispatch(sendCartData(cart));
      console.log("running");
    }
  }, [cart, dispatch]);

  return (
    <>
      {showModalSelector && <Cart />}
      <Header />
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
