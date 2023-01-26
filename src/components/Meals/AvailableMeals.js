import styles from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import { useEffect, useState } from "react";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(
        "https://react-http-36b3a-default-rtdb.europe-west1.firebasedatabase.app/meals.json"
      );

      console.log("resp", response);

      if (!response.ok) {
        throw new Error("Request failed!");
      }
      const data = await response.json();
      const loadedMeals = [];
      for (const key in data) {
        loadedMeals.push({
          id: key,
          name: data[key].name,
          description: data[key].description,
          price: data[key].price,
        });
      }

      setMeals(loadedMeals);
      setIsLoading(false);
    };

    fetchMeals().catch((err) => {
      setIsLoading(false);
      setError(err.message);
    });
  }, []);

  const mealsList = meals.map((meal) => {
    return (
      <MealItem
        id={meal.id}
        key={meal.id}
        name={meal.name}
        description={meal.description}
        price={meal.price}
      >
        {meal.name}
      </MealItem>
    );
  });

  return (
    <section className={styles.meals}>
      <Card>
        {!isLoading && !error && <ul>{mealsList}</ul>}
        {isLoading && !error && (
          <p className={styles["meals-loading"]}>Loading data...</p>
        )}
        {error && (
          <p className={styles["meals-loading-error"]}>
            An error occurred: {error}
          </p>
        )}
      </Card>
    </section>
  );
};

export default AvailableMeals;
