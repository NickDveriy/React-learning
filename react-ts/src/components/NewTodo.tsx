import React, { useRef, useContext } from "react";
import styles from "./NewTodo.module.css";
import { TodosContext } from "../store/todos-context";

const NewTodo: React.FC = () => {
  const textRef = useRef<HTMLInputElement>(null);
  const { addTodo } = useContext(TodosContext);

  const addTodoHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredValue = textRef.current!.value;

    if (enteredValue.trim().length === 0) {
      return;
    }

    addTodo(enteredValue);
  };

  return (
    <form className={styles.form} onSubmit={addTodoHandler}>
      <label htmlFor="todoText">Todo Text</label>
      <input type="text" id="todoText" ref={textRef} />
      <button type="submit">Add todo</button>
    </form>
  );
};

export default NewTodo;
