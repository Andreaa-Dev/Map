import { combineReducers } from "redux";
import fetchMap from "./fetchMap";

const createRootReducer = () => {
  combineReducers({
    mapState: fetchMap,
  });
};

export default createRootReducer;
