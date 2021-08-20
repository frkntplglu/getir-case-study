import { combineReducers } from "redux";
import { cartReducer } from "./cartReducers";
import { companiesReducer } from "./companiesReducers";
import { productsReducers } from "./productsReducers";

const reducers = combineReducers({
  products: productsReducers,
  companies: companiesReducer,
  cart: cartReducer,
});

export default reducers;
