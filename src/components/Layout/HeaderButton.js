import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderButton.module.css";
import { useContext, useEffect, useState } from "react";
import CartContext from "../../store/create-context";

const HeaderButton = (props) => {
  const [btnIsHighlighted, setbtnIsHighlighted] = useState(false);
  const cartCtx = useContext(CartContext);

  const numberOfcartItems = cartCtx.items.reduce((curNum, item) => {
    return curNum + item.amount;
  }, 0);

  // const btnClasses = `${classes.button} ${
  //   btnIsHighlighted ? classes.bump : ""
  // }`;

  // const { items } = cartCtx;

  // useEffect(() => {
  //   if (items.length === 0) {
  //     return;
  //   }
  //   setbtnIsHighlighted(true);
  //   const timer = setTimeout(() => {
  //     setbtnIsHighlighted(false);
  //   }, 300);

  //   return () => {
  //     clearTimeout(timer);
  //   };
  // }, [items]);

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
