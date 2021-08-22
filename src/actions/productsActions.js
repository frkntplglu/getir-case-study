import getirAPI from "../services/getirAPI";

import {
  PRODUCTS_FETCH,
  PRODUCTS_FETCH_SUCCESS,
  PRODUCTS_FETCH_FAIL,
} from "./types";

export const getAllProducts = () => async (dispatch) => {
  try {
    dispatch({ type: PRODUCTS_FETCH, payload: [] });
    const { data } = await getirAPI.get("/products");
    dispatch({ type: PRODUCTS_FETCH_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: PRODUCTS_FETCH_FAIL, payload: error.message });
  }
};

export const sortProducts =
  (sortType = "") =>
  (dispatch) => {
    console.log(sortType);
    dispatch({ type: sortType });
  };
