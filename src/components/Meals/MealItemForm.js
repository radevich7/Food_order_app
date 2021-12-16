import React, { useState, useRef } from "react";

import Input from "../UI/Input";
import classes from "./MealItemForm.module.css";
const MealItemForm = (props) => {
  return (
    <div>
      <form className={classes.form}>
        <Input
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
        {/* <p>The amount has to be more than 5</p>} */}
      </form>
    </div>
  );
};

export default MealItemForm;
