import React, { useState } from "react";
import Cart from "./components/Cart/Cart";
import ContextProvider from "./store/ContextProvider";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";

function App() {
  const [modalCart, setModalCart] = useState(false);

  const openModalCart = () => {
    setModalCart(true);
  };
  const hideModalCart = () => {
    setModalCart(false);
  };

  return (
    <ContextProvider>
      {modalCart && <Cart onClose={hideModalCart} />}
      <Header onOpen={openModalCart} />
      <main>
        <Meals />
      </main>
    </ContextProvider>
  );
}

export default App;
