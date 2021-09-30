import React, { useState, useRef } from "react";

import Input from "../UI/Input";
import classes from "./MealItemForm.module.css";
const MealItemForm = (props) => {
  const [enteredAmountIsValid, setEnteredAmountIsValid] = useState(true);

  const enteredInput = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmountString = enteredInput.current.value;
    // to Number
    const enteredAmount = +enteredAmountString;
    console.log(enteredAmount);
    if (enteredAmount <= 0 || enteredAmount > 5) {
      return setEnteredAmountIsValid(false);
    }

    props.onAddToCart(enteredAmount);
  };

  return (
    <div>
      <form className={classes.form} onSubmit={submitHandler}>
        <Input
          ref={enteredInput}
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
        <button>+Add</button>
        {!enteredAmountIsValid && <p>The amount has to be more than 5</p>}
      </form>
    </div>
  );
};

export default MealItemForm;
