import { Fragment } from "react";

import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderButton.module.css";

const HeaderButton = () => {
  return (
    <div className={classes.button}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span className={classes.text}>Your Cart</span>
      <span className={classes.badge}>3</span>
    </div>
  );
};

export default HeaderButton;