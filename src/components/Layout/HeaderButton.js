import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderButton.module.css";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/uiSlice";
import { useEffect, useState } from "react";
const HeaderButton = (props) => {
  const dispatch = useDispatch();
  const [buttonBump, setButtonBump] = useState(false);
  const openHandler = () => {
    dispatch(uiActions.toggleModal());
  };
  const itemsSelector = useSelector((state) => state.cart.items);
  const cardQuantitySelector = useSelector((state) => state.cart.totalQuantity);

  useEffect(() => {
    if (itemsSelector.length === 0) {
      return;
    }
    setButtonBump(true);

    const timer = setTimeout(() => {
      setButtonBump(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [itemsSelector]);

  return (
    <button
      className={`${classes.button} ${buttonBump ? classes.bump : ""}`}
      onClick={openHandler}
    >
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span className={classes.text}>Your Cart</span>
      <span className={classes.badge}>{cardQuantitySelector}</span>
    </button>
  );
};

export default HeaderButton;
