import { useReducer } from "react";

const initialInputState = {
  value: "",
  isTouched: false,
};

const inputStateReducer = (prevState, action) => {
  switch (action.type) {
    case "INPUT":
      return { value: action.value, isTouched: prevState.isTouched };
    case "BLUR":
      return { value: prevState.value, isTouched: true };
    case "RESET":
      return { value: "", isTouched: false };
    default:
      return initialInputState;
  }
};

const useInput = (validateValueFn) => {
  const [inputState, dispatch] = useReducer(
    inputStateReducer,
    initialInputState
  );

  //   const [enteredValue, setEnteredValue] = useState("");
  //   const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validateValueFn(inputState.value);
  const hasError = inputState.isTouched && !valueIsValid;

  const valueChangeHandler = (event) => {
    dispatch({ type: "INPUT", value: event.target.value });
    // setEnteredValue(event.target.value);
  };

  const inputBlurHandler = (event) => {
    dispatch({ type: "BLUR" });
    //setIsTouched(true);
  };

  const reset = () => {
    dispatch({ type: "RESET" });
    // setEnteredValue("");
    // setIsTouched(false);
  };

  return {
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset,
    value: inputState.value,
    isValid: valueIsValid,
  };
};

export default useInput;
