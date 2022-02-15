import { combineReducers } from "redux";
import fetchMap from "./fetchMap";

const createRootReducer = () => {
  return combineReducers({
    mapState: fetchMap,
  });
};

export default createRootReducer;
