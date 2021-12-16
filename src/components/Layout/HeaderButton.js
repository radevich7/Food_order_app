import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderButton.module.css";

const HeaderButton = (props) => {
  return (
    <button className={classes.button} onClick={props.onOpen}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span className={classes.text}>Your Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default HeaderButton;
