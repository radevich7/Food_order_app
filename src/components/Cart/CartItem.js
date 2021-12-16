import classes from "./CartItem.module.css";

const CartItem = (props) => {
  // const price = `$${props.price.toFixed(2)}`;

  return (
    <li className={classes["cart-item"]}>
      <div>
        <h2>Sdsa</h2>
        <div className={classes.summary}>
          <span className={classes.price}>20</span>
          <span className={classes.amount}>x 19</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button>−</button>
        <button>+</button>
      </div>
    </li>
  );
};

export default CartItem;
