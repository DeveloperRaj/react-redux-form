import product from "./product";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  product: product,
});

export default allReducers;
