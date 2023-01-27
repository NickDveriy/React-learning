const redux = require("redux");

const counterReducer = (prevState = { counter: 0 }, action) => {
  if (action.type === "INCREMENT") {
    return {
      counter: prevState.counter + 1,
    };
  }

  if (action.type === "DECREMENT") {
    return {
      counter: prevState.counter - 1,
    };
  }

  return prevState;
};

const store = redux.createStore(counterReducer);

const counterSubsriber = () => {
  // will be executed on state change
  const latestState = store.getState();
  console.log("latest state", latestState);
};

store.subscribe(counterSubsriber);

store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "DECREMENT" });
