import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "./types";

export const addItemToCart = (product) => (dispatch) => {
  dispatch({ type: CART_ADD_ITEM, payload: product });
};

const removeItemFromCart = () => (dispatch, getState) => {};

const updateItem = () => (dispatch, getState) => {};
