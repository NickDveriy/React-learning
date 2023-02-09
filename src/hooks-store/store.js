import { useState, useEffect } from "react";

// these three values are "global" (even though they are not defined in window object),
// so they only exists once in application lifetime - shared through entire app so every component share same values
let globalState = {};
let listeners = [];
let actions = {};

// shouldListen - flag for a little optimization of rerendering to avoid unnecessary rendering of all items on change of isFavorite prop of single item
export const useStore = (shouldListen = true) => {
  const setState = useState(globalState)[1];

  const dispatch = (actionIdentifier, payload) => {
    const newState = actions[actionIdentifier](globalState, payload);
    globalState = { ...globalState, ...newState };

    for (const listener of listeners) {
      listener(globalState);
    }
  };

  useEffect(() => {
    if (shouldListen) {
      listeners.push(setState);
    }

    return () => {
      if (shouldListen) {
        listeners = listeners.filter((listener) => listener !== setState); // unregister listener of component on unmount of that component
      }
    };
  }, [setState, shouldListen]);

  return [globalState, dispatch];
};

export const initStore = (userActions, initialState) => {
  if (initialState) {
    globalState = { ...globalState, ...initialState };
  }
  actions = { ...actions, ...userActions };
};
