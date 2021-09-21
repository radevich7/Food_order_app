import { Fragment } from "react";

import classes from "./Header.module.css";
import tableImage from "../../assets/img1.png";
import HeaderButton from "./HeaderButton";
const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderButton onOpen={props.onOpen} />
      </header>
      <div className={classes["main-image"]}>
        <img src={tableImage} alt="Table full of delicious food" />
      </div>
    </Fragment>
  );
};

export default Header;
