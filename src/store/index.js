import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(prevState) {
      prevState.counter++; // internally uses immer lib to clone existing state to a new state
    },
    decrement(prevState) {
      prevState.counter--;
    },
    increase(prevState, action) {
      prevState.counter = prevState.counter + action.payload;
    },
    toggleCounter(prevState) {
      prevState.showCounter = !prevState.showCounter;
    },
  },
});

// const counterReducer = (prevState = initialState, action) => {
//   if (action.type === "INCREMENT") {
//     return {
//       counter: prevState.counter + (action.value || 1),
//       showCounter: prevState.showCounter,
//     };
//   }
//   if (action.type === "INCREASE") {
//     return {
//       counter: prevState.counter + action.amount,
//       showCounter: prevState.showCounter,
//     };
//   }

//   if (action.type === "DECREMENT") {
//     return {
//       counter: prevState.counter - 1,
//       showCounter: prevState.showCounter,
//     };
//   }
//   if (action.type === "TOGGLE") {
//     return {
//       counter: prevState.counter,
//       showCounter: !prevState.showCounter,
//     };
//   }

//   return prevState;
// };

//const store = createStore(counterSlice.reducer); // fine for single slice

const store = configureStore({
  // for multiple slices
  reducer: counterSlice.reducer,
});

export const counterActions = counterSlice.actions;
export default store;
