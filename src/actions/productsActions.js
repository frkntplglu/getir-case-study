import getirAPI from "../services/getirAPI";

import {
  PRODUCTS_FETCH,
  PRODUCTS_FETCH_SUCCESS,
  PRODUCTS_FETCH_FAIL,
  FILTER_PRODUCTS_BY_BRAND,
  FILTER_PRODUCTS_BY_TAG,
  SORT_PRODUCTS,
} from "./types";

export const getAllProducts = () => async (dispatch) => {
  try {
    dispatch({ type: PRODUCTS_FETCH, payload: [] });
    const { data } = await getirAPI.get("/products?_page=1&_limit=16");
    dispatch({ type: PRODUCTS_FETCH_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: PRODUCTS_FETCH_FAIL, payload: error.message });
  }
};

export const sortProducts =
  (sortType = "SORT_LOW_TO_HIGH") =>
  (dispatch) => {
    dispatch({ type: sortType });
  };

export const filterProductsByBrand =
  (brands = []) =>
  (dispatch) => {};

const filterProductsByTagName =
  (tags = []) =>
  (dispatch, getState) => {};
