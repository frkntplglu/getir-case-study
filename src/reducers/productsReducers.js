import {
  PRODUCTS_FETCH,
  PRODUCTS_FETCH_SUCCESS,
  PRODUCTS_FETCH_FAIL,
  SORT_BY_PRICE_ASC,
  SORT_BY_PRICE_DESC,
  SORT_BY_DATE_ASC,
  SORT_BY_DATE_DESC,
} from "../actions/types";

// asc -> from small to large
// desc -> from large to small

const productsReducers = (state = { loading: true, items: [] }, action) => {
  switch (action.type) {
    case PRODUCTS_FETCH:
      return { loading: true, items: [] };
    case PRODUCTS_FETCH_SUCCESS:
      return { loading: false, items: action.payload };
    case PRODUCTS_FETCH_FAIL:
      return { loading: false, items: [], error: action.payload };
    case SORT_BY_PRICE_ASC:
      const ascData = state.items.sort((a, b) => a.price - b.price);
      return {
        ...state,
        items: ascData,
      };
    case SORT_BY_PRICE_DESC:
      const descData = state.items.sort((a, b) => b.price - a.price);
      return {
        ...state,
        items: descData,
      };
    case SORT_BY_DATE_ASC:
      const ascDateData = state.items.sort((a, b) => a.added - b.added);
      return {
        ...state,
        items: ascDateData,
      };
    case SORT_BY_DATE_DESC:
      const descDateData = state.items.sort((a, b) => b.added - a.added);
      return {
        ...state,
        items: descDateData,
      };
    default:
      return state;
  }
};

export { productsReducers };
