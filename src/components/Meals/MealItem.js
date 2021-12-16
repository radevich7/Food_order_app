import React from "react";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

const MealItem = (props) => {
  return (
    <React.Fragment>
      <li className={classes.meal_item}>
        <div>
          <h3>{props.name}</h3>
          <div className={classes.description}>{props.description}</div>
          <div className={classes.price}>{props.price.toFixed(2)} $</div>
        </div>
        <div>
          <MealItemForm
            name={props.name}
            description={props.description}
            price={props.price}
            id={props.id}
          />
        </div>
      </li>
    </React.Fragment>
  );
};

export default MealItem;
