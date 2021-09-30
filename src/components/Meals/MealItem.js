import React, { useContext } from "react";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import CartContext from "../../store/create-context";

const MealItem = (props) => {
  const price = `$${props.price}`;
  const cartCtx = useContext(CartContext);
  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <React.Fragment>
      <li className={classes.meal_item}>
        <div>
          <h3>{props.name}</h3>
          <div className={classes.description}>{props.description}</div>
          <div className={classes.price}>{price}</div>
        </div>
        <div>
          <MealItemForm
            id={props.id}
            name={props.name}
            description={props.description}
            price={props.price}
            onAddToCart={addToCartHandler}
          />
        </div>
      </li>
    </React.Fragment>
  );
};

export default MealItem;
