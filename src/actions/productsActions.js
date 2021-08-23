import getirAPI from "../services/getirAPI";

import {
  PRODUCTS_FETCH,
  PRODUCTS_FETCH_SUCCESS,
  PRODUCTS_FETCH_FAIL,
  ADD_FILTER_BRAND,
  REMOVE_FILTER_BRAND,
  RESET_FILTER_BRAND,
  ADD_FILTER_TAG,
  REMOVE_FILTER_TAG,
  RESET_FILTER_TAG,
  SET_CURRENT_PAGE,
} from "./types";

const getAllProducts = () => async (dispatch) => {
  try {
    dispatch({ type: PRODUCTS_FETCH, payload: [] });
    const { data } = await getirAPI.get("/products");
    dispatch({ type: PRODUCTS_FETCH_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: PRODUCTS_FETCH_FAIL, payload: error.message });
  }
};

const sortProducts =
  (sortType = "") =>
  (dispatch) => {
    dispatch({ type: sortType });
  };

const addBrandToFilter = (brand) => (dispatch) => {
  if (brand === "all") {
    dispatch({ type: RESET_FILTER_BRAND });
  } else {
    dispatch({ type: ADD_FILTER_BRAND, payload: brand });
  }
};

const removeBrandFromFilter = (brand) => (dispatch) => {
  dispatch({ type: REMOVE_FILTER_BRAND, payload: brand });
};

const addTagToFilter = (tag) => (dispatch) => {
  if (tag === "all") {
    dispatch({ type: RESET_FILTER_TAG });
  } else {
    dispatch({ type: ADD_FILTER_TAG, payload: tag });
  }
};

const removeTagFromFilter = (tag) => (dispatch) => {
  dispatch({ type: REMOVE_FILTER_TAG, payload: tag });
};

const setCurrentPage = (number) => (dispatch) => {
  dispatch({ type: SET_CURRENT_PAGE, payload: number });
};

// const filterByTag = (tag) => (dispatch) => {
//   if (tag === "all") {
//     dispatch({ type: RESET_FILTER_TAG });
//   } else {
//     dispatch({ type: SET_FILTER_TAG, payload: tag });
//   }
// };

export {
  getAllProducts,
  sortProducts,
  addBrandToFilter,
  removeBrandFromFilter,
  addTagToFilter,
  removeTagFromFilter,
  setCurrentPage,
};
