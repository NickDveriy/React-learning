import React, { useRef } from "react";

const NewTodo: React.FC<{ onAddTodo: (text: string) => void }> = (props) => {
  const textRef = useRef<HTMLInputElement>(null);

  const addTodoHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredValue = textRef.current!.value;

    if (enteredValue.trim().length === 0) {
      return;
    }

    props.onAddTodo(enteredValue);
  };

  return (
    <form onSubmit={addTodoHandler}>
      <label htmlFor="todoText">Todo Text</label>
      <input type="text" id="todoText" ref={textRef} />
      <button type="submit">Add todo</button>
    </form>
  );
};

export default NewTodo;
