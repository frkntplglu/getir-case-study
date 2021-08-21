import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import reducers from "./reducers";

const cartItemsFromStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];
const cartTotalPriceFromStorage = localStorage.getItem("cartTotal")
  ? JSON.parse(localStorage.getItem("cartTotal"))
  : 0;

const initialState = {
  cart: { items: cartItemsFromStorage, totalPrice: cartTotalPriceFromStorage },
};

const middleware = [thunk];

const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
