import {
  CART_ADD_ITEM,
  CART_INCREASE_QTY,
  CART_DECREASE_QTY,
  CART_TOTAL,
  CART_SET_SPINNER,
  CART_UNSET_SPINNER,
} from "./types";

const addItemToCart = (product) => (dispatch) => {
  dispatch({ type: CART_SET_SPINNER });
  dispatch({ type: CART_ADD_ITEM, payload: product });
  dispatch({ type: CART_TOTAL });
  setTimeout(() => {
    dispatch({ type: CART_UNSET_SPINNER });
  }, 250);
};

const updateItemInCart = (type, slug) => (dispatch) => {
  dispatch({ type: CART_SET_SPINNER });
  if (type === "increase") {
    dispatch({ type: CART_INCREASE_QTY, payload: slug });
  } else if (type === "decrease") {
    dispatch({ type: CART_DECREASE_QTY, payload: slug });
  }
  dispatch({ type: CART_TOTAL });
  setTimeout(() => {
    dispatch({ type: CART_UNSET_SPINNER });
  }, 250);
};

export { addItemToCart, updateItemInCart };
