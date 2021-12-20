import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cartSlice";
import classes from "./CartItem.module.css";

const CartItem = (props) => {
  const dispatch = useDispatch();

  const addItemHandler = (e) => {
    e.preventDefault();
    dispatch(
      cartActions.addItemToCart({
        name: props.name,
        description: props.description,
        price: props.price,
        id: props.id,
        quantity: 1,
      })
    );
  };

  const removeItemHandler = (e) => {
    e.preventDefault();
    dispatch(cartActions.removeItemFromCart(props.id));
  };

  return (
    <li className={classes["cart-item"]}>
      <div>
        <h2>{props.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>${props.price.toFixed(2)}</span>
          <span className={classes.amount}>{props.quantity}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={removeItemHandler}>−</button>
        <button onClick={addItemHandler}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
