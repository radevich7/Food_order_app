import React from "react";
import { useSelector } from "react-redux";

import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";

function App() {
  const showModalSelector = useSelector((state) => state.ui.showModal);

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
