import MealItem from "./MealItem";

import classes from "./MealsList.module.css";

const initialData = [
  {
    id: 1,
    name: "Chicken (Grilled or Fried)",
    description: "Contrary to popular belief",
    price: 20,
  },
  {
    id: 2,
    name: "Cheese and Bacon Burger",
    description: "Lorem Ipsum is not",
    price: 15,
  },
  {
    id: 3,
    name: "Ham and Chicken Burger",
    description: "Contrary to popular belief",
    price: 25,
  },
  {
    id: 4,
    name: "French fries",
    description: "Lorem ipsum dolor sit amet",
    price: 8,
  },
  {
    id: 5,
    name: "Caesar Salat",
    description: "Sed ut perspiciatis unde ",
    price: 10,
  },
];
const MealList = () => {
  const overallList = initialData.map((meal) => (
    <MealItem
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <ul>{overallList}</ul>
    </section>
  );
};

export default MealList;
