import React from "react";
import { useDispatch } from "react-redux";
import { uiActions } from "../../store/uiSlice";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
const Cart = (props) => {
  const dispatch = useDispatch();
  const closeModalHandler = () => {
    dispatch(uiActions.toggleModal());
  };
  // Cart ITEMS
  const cartItems = (
    <ul className={classes["cart-items"]}>
      <CartItem />
    </ul>
  );

  return (
    <Modal onClose={closeModalHandler}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>12</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={closeModalHandler}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
