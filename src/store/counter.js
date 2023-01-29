import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, showCounter: true };
const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment(currState) {
      currState.counter++; // internally uses 'immer' lib to clone existing state to a new state
    },
    decrement(currState) {
      currState.counter--;
    },
    increase(currState, action) {
      currState.counter = currState.counter + action.payload;
    },
    toggleCounter(currState) {
      currState.showCounter = !currState.showCounter;
    },
  },
});

export const counterActions = counterSlice.actions;
export default counterSlice.reducer;
