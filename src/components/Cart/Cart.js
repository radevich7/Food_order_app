import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/uiSlice";
import { cartActions } from "../../store/cartSlice";
import { sendCartData } from "../../store/cartActions";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
const Cart = (props) => {
  const dispatch = useDispatch();
  const [orderSent, setOrderSent] = useState(false);

  const cardItemsSelector = useSelector((state) => state.cart.items);
  const cartTotalAmountSelector = useSelector(
    (state) => state.cart.totalAmount
  );
  let initialData = { items: [], totalAmount: 0, totalQuantity: 0 };

  const sendOrderHandler = () => {
    if (cartTotalAmountSelector == 0) return;
    dispatch(
      sendCartData({
        initialData,
      })
    );
    dispatch(cartActions.replaceCart(initialData));
    setOrderSent(true);
  };
  const closeModalHandler = () => {
    dispatch(uiActions.toggleModal());
    setOrderSent(false);
  };
  console.log(cartTotalAmountSelector);

  return (
    <Modal onClose={closeModalHandler}>
      <ul className={classes["cart-items"]}>
        {cardItemsSelector.map((item) => (
          <CartItem
            id={item.id}
            key={item.id}
            price={item.price}
            totalPrice={item.totalPrice}
            quantity={item.quantity}
            name={item.name}
          />
        ))}
      </ul>
      <div className={classes.total}>
        {orderSent && <span>Your order has been placed</span>}
        {!orderSent && <span>Total Amount</span>}
        {!orderSent && <span>${cartTotalAmountSelector.toFixed(2)}</span>}
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={closeModalHandler}>
          Close
        </button>
        {!orderSent && (
          <button
            className={`${classes.button} ${
              !cartTotalAmountSelector ? classes.btn_disabled : ""
            }`}
            onClick={sendOrderHandler}
          >
            Order
          </button>
        )}
        {orderSent && (
          <button
            className={classes.button}
            onClick={(e) => {
              setOrderSent(false);
              closeModalHandler();
            }}
          >
            Continue shopping
          </button>
        )}
      </div>
    </Modal>
  );
};

export default Cart;
