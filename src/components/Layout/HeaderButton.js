import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderButton.module.css";
import { useDispatch } from "react-redux";
import { uiActions } from "../../store/uiSlice";
const HeaderButton = (props) => {
  const dispatch = useDispatch();
  const openHandler = () => {
    dispatch(uiActions.toggleModal());
  };
  return (
    <button className={classes.button} onClick={openHandler}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span className={classes.text}>Your Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default HeaderButton;
