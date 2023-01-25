import useInput from "./hooks/use-input";

const SimpleInput = () => {
  const {
      value: enteredName,
      isValid: enteredNameIsValid,
      hasError: nameInputHasError,
      reset: resetNameInput,
      valueChangeHandler: nameInputChangeHandler,
      inputBlurHandler: nameInputBlurHandler,
    } = useInput((value) => value.trim() !== ""),
    {
      value: enteredEmail,
      isValid: enteredEmailIsValid,
      hasError: emailInputHasError,
      reset: resetEmailInput,
      valueChangeHandler: emailInputChangeHandler,
      inputBlurHandler: emailInputBlurHandler,
    } = useInput((value) => value.includes("@"));

  const formIsValid = enteredNameIsValid && enteredEmailIsValid;

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (!enteredNameIsValid || !enteredEmailIsValid) {
      return;
    }
    resetNameInput();
    resetEmailInput();
  };

  const nameInputClasses = nameInputHasError
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = emailInputHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName}
        />
      </div>
      {nameInputHasError && (
        <p className="error-text">Name should not be empty!</p>
      )}
      <div className={emailInputClasses}>
        <label htmlFor="email">Your Email</label>
        <input
          type="email"
          id="email"
          onChange={emailInputChangeHandler}
          onBlur={emailInputBlurHandler}
          value={enteredEmail}
        />
      </div>
      {emailInputHasError && (
        <p className="error-text">Email should not be empty!</p>
      )}
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
