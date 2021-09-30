import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderButton.module.css";
import { useContext } from "react";
import CartContext from "../../store/create-context";

const HeaderButton = (props) => {
  const cartCtx = useContext(CartContext);

  const numberOfcartItems = cartCtx.items.reduce((curNum, item) => {
    return curNum + item.amount;
  }, 0);

  return (
    <button className={classes.button} onClick={props.onOpen}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span className={classes.text}>Your Cart</span>
      <span className={classes.badge}>{numberOfcartItems}</span>
    </button>
  );
};

export default HeaderButton;
