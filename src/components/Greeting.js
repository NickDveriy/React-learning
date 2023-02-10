import { useState } from "react";

const Greeting = () => {
  const [isTextChanged, setIsTextChanged] = useState(false);

  const changeTextHandler = () => {
    setIsTextChanged(true);
  };

  return (
    <div>
      <h2>Hello World!</h2>
      {isTextChanged ? <p>Changed text</p> : <p>Initial text</p>}
      <button onClick={changeTextHandler}>Change text!</button>
    </div>
  );
};

export default Greeting;
