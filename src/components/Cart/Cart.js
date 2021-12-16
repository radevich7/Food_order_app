import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/uiSlice";
import { cartActions } from "../../store/cartSlice";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
const Cart = (props) => {
  const dispatch = useDispatch();

  const cardItemsSelector = useSelector((state) => state.cart.items);
  const totalPrice = cardItemsSelector
    .map((val) => val.totalPrice)
    .reduce((prev, cur) => prev + cur)
    .toFixed(2);

  const closeModalHandler = () => {
    dispatch(uiActions.toggleModal());
  };

  return (
    <Modal onClose={closeModalHandler}>
      <ul className={classes["cart-items"]}>
        {cardItemsSelector.map((item) => (
          <CartItem
            key={item.id}
            price={item.price}
            totalPrice={item.totalPrice}
            quantity={item.quantity}
            name={item.name}
          />
        ))}
      </ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalPrice}</span>
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
