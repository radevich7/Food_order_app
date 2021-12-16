import React, { useState, useRef } from "react";
import { cartActions } from "../../store/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import Input from "../UI/Input";
import classes from "./MealItemForm.module.css";
const MealItemForm = (props) => {
  const { name, description, price, id } = props;
  const amountInputRef = useRef();
  const dispatch = useDispatch();

  const addItemHandler = (e) => {
    e.preventDefault();
    dispatch(
      cartActions.addItemToCart({
        name,
        description,
        price,
        id,
        quantity: +amountInputRef.current.value,
      })
    );
  };

  return (
    <div>
      <form className={classes.form}>
        <Input
          ref={amountInputRef}
          label="Amount"
          input={{
            id: "amount",
            type: "number",
            min: "1",
            max: "5",
            step: "1",
            defaultValue: "1",
          }}
        />
        <button onClick={addItemHandler}>+Add</button>
        {/* <p>The amount has to be more than 5</p>} */}
      </form>
    </div>
  );
};

export default MealItemForm;
