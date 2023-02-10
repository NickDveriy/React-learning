import { useState } from "react";
import Output from "./Output";

const Greeting = () => {
  const [isTextChanged, setIsTextChanged] = useState(false);

  const changeTextHandler = () => {
    setIsTextChanged(true);
  };

  return (
    <div>
      <h2>Hello World!</h2>
      {isTextChanged ? (
        <Output>Changed text</Output>
      ) : (
        <Output>Initial text</Output>
      )}
      <button onClick={changeTextHandler}>Change text!</button>
    </div>
  );
};

export default Greeting;
