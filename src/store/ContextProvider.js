import React, { useReducer } from "react";

import CartContext from "./create-context";

const defaultCart = { items: [], totalAmount: 0 };

const cartReducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    // checking for the existing item in the cart, in order no to have duplicates

    const updatedTotalAmount =
      state.totalAmount + action.item.amount * action.item.price;

    const checkForExistingItemInCard = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    let updatedItems;

    const existingItem = state.items[checkForExistingItemInCard];
    if (existingItem) {
      const updatedItem = {
        ...existingItem,
        amount: existingItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[checkForExistingItemInCard] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  return defaultCart;
};

const ContextProvider = (props) => {
  const [cartState, dispatchCartState] = useReducer(cartReducer, defaultCart);

  const addItemHandler = (item) => {
    dispatchCartState({ type: "ADD_ITEM", item: item });
  };

  const removeItemHandler = (id) => {
    dispatchCartState({ type: "REMOVE_ITEM", id: id });
  };

  const storeValueContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };

  return (
    <CartContext.Provider value={storeValueContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default ContextProvider;
