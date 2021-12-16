import React, { useContext } from "react";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import CartContext from "../../store/create-context";

const MealItem = (props) => {
  return (
    <React.Fragment>
      <li className={classes.meal_item}>
        <div>
          <h3>{props.name}</h3>
          <div className={classes.description}>{props.description}</div>
          <div className={classes.price}>20</div>
        </div>
        <div>
          <MealItemForm />
        </div>
      </li>
    </React.Fragment>
  );
};

export default MealItem;
