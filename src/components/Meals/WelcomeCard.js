import classes from "./WelcomeCard.module.css";

const WelcomeCard = () => {
  return (
    <div className={classes.card}>
      <p>
        Dear guests, you are welcomed to order with us at ReactMeals website. We
        will serve you with the mouth watering dishes. Have a pleasant dining
        experience.
      </p>
    </div>
  );
};

export default WelcomeCard;
