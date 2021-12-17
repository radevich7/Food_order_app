import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderButton.module.css";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/uiSlice";
const HeaderButton = (props) => {
  const dispatch = useDispatch();
  const openHandler = () => {
    dispatch(uiActions.toggleModal());
  };
  const cardQuantitySelector = useSelector((state) => state.cart.totalQuantity);
  return (
    <button className={classes.button} onClick={openHandler}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span className={classes.text}>Your Cart</span>
      <span className={classes.badge}>{cardQuantitySelector}</span>
    </button>
  );
};

export default HeaderButton;
