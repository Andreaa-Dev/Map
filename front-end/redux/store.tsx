import thunk from "redux-thunk";
import { createStore, applyMiddleware, compose } from "redux";

import { AppState } from "../src/types";

const intState: AppState = {
  mapState: {
    map: [],
    eachPlace: null,
  },
};

export default function makeStore(initialState = intState) {
  const middlewares = [thunk];
  let composeEnhancers = compose;
  if (process.env.NODE_ENV === "development") {
    if ((window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
      composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
    }
  }
}
