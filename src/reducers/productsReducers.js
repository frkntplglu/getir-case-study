import {
  PRODUCTS_FETCH,
  PRODUCTS_FETCH_SUCCESS,
  PRODUCTS_FETCH_FAIL,
} from "../actions/types";

const productsReducers = (state = { loading: true, items: [] }, action) => {
  switch (action.type) {
    case PRODUCTS_FETCH:
      return { loading: true, items: [] };
    case PRODUCTS_FETCH_SUCCESS:
      return { loading: false, items: action.payload };
    case PRODUCTS_FETCH_FAIL:
      return { loading: false, items: [], error: action.payload };
    // case SORT_BY_PRICE_ASC:
    //   return state;
    // case SORT_BY_PRICE_DESC:
    //   return state;
    // case SORT
    default:
      return state;
  }
};

export { productsReducers };
