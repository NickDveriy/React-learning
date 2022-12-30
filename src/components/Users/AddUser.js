import React, { Fragment, useState, useRef } from "react";
import styles from "./AddUser.module.css";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const nameInputRef = useRef(); // NOTE: usage of ref - uncontrolled component
  const ageInputRef = useRef();

  // const [nameValue, setNameValue] = useState(""); // NOTE: usage of state - controlled component
  // const [ageValue, setAgeValue] = useState("");
  const [error, setError] = useState();
  const addUserHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;

    if (!enteredName.trim().length || !enteredAge.trim().length) {
      setError({
        title: "Invalid input!",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }

    if (+enteredAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0).",
      });
      return;
    }

    props.onAddUser({
      name: enteredName,
      age: +enteredAge,
    });

    nameInputRef.current.value = ""; // NOTE: not the best approach since it directly changes the DOM element value
    ageInputRef.current.value = "";
  };

  // const ageChangeHandler = (event) => {
  //   setAgeValue(event.target.value);
  // };
  // const nameChangeHandler = (event) => {
  //   setNameValue(event.target.value);
  // };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Fragment>
      {error && (
        <ErrorModal
          message={error.message}
          title={error.title}
          onConfirm={errorHandler}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            // value={nameValue}
            // onChange={nameChangeHandler}
            ref={nameInputRef}
          ></input>
          <label htmlFor="age">Age (Years)</label>
          <input
            type="number"
            id="age"
            // value={ageValue}
            // onChange={ageChangeHandler}
            max="150"
            min="0"
            ref={ageInputRef}
          ></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Fragment>
  );
};

export default AddUser;
