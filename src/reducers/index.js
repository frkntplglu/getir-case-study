import { combineReducers } from "redux";
import { cartReducer } from "./cartReducers";
import { commonReducers } from "./commonReducers";
import { companiesReducer } from "./companiesReducers";
import { productsReducers } from "./productsReducers";
import { tagsReducers } from "./tagsReducers";

const reducers = combineReducers({
  productsList: productsReducers,
  companiesList: companiesReducer,
  tagsList: tagsReducers,
  cart: cartReducer,
});

export default reducers;
