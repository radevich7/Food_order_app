import React from "react";
import classes from "./MealItem.module.css";

const MealItem = (props) => {
  const price = `$${props.price}`;
  return (
    <React.Fragment>
      <li className={classes.meal_item}>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </li>
    </React.Fragment>
  );
};

export default MealItem;
