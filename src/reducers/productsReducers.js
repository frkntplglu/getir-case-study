import {
  PRODUCTS_FETCH,
  PRODUCTS_FETCH_SUCCESS,
  PRODUCTS_FETCH_FAIL,
  SORT_BY_PRICE_ASC,
  SORT_BY_PRICE_DESC,
  SORT_BY_DATE_ASC,
  SORT_BY_DATE_DESC,
  ADD_FILTER_BRAND,
  REMOVE_FILTER_BRAND,
  ADD_FILTER_TAG,
  REMOVE_FILTER_TAG,
  RESET_FILTER_BRAND,
  RESET_FILTER_TAG,
  SET_CURRENT_PAGE,
} from "../actions/types";

import { filterData } from "../utils/handleFilter";

const productsReducers = (
  state = {
    loading: true,
    items: [],
    filteredItems: [],
    brandFilter: [],
    tagFilter: [],
    currentPage: 1,
    productsPerPage: 16,
  },
  action
) => {
  switch (action.type) {
    case PRODUCTS_FETCH:
      return { ...state, loading: true };
    case PRODUCTS_FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload,
        filteredItems: action.payload,
      };
    case PRODUCTS_FETCH_FAIL:
      return { ...state, loading: false, error: action.payload };
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
    case ADD_FILTER_BRAND:
      const addedBrandFilter = [...state.brandFilter, action.payload];
      const addedFilteredByBrandItems = filterData(
        state.items,
        addedBrandFilter,
        state.tagFilter
      );
      return {
        ...state,
        showAllItem: false,
        brandFilter: addedBrandFilter,
        filteredItems: addedFilteredByBrandItems,
        currentPage: 1,
      };
    case REMOVE_FILTER_BRAND:
      const removedBrandFilter = state.brandFilter.filter(
        (brand) => brand !== action.payload
      );
      const removedFilteredByBrandItems = filterData(
        state.items,
        removedBrandFilter,
        state.tagFilter
      );
      return {
        ...state,
        brandFilter: removedBrandFilter,
        filteredItems: removedFilteredByBrandItems,
      };
    case RESET_FILTER_BRAND:
      return { ...state, filteredItems: state.items, currentPage: 1 };
    case ADD_FILTER_TAG:
      const newTagFilter = [...state.tagFilter, action.payload];
      const newFilteredByTagItems = filterData(
        state.filteredItems,
        state.brandFilter,
        newTagFilter
      );
      return {
        ...state,
        showAllItem: false,
        tagFilter: newTagFilter,
        filteredItems: newFilteredByTagItems,
        currentPage: 1,
      };
    case RESET_FILTER_TAG:
      return { ...state, filteredItems: state.items, currentPage: 1 };
    case REMOVE_FILTER_TAG:
      const removedTagFilter = state.tagFilter.filter(
        (tag) => tag !== action.payload
      );
      const removedFilteredByTagItems = filterData(
        state.items,
        state.brandFilter,
        removedTagFilter
      );
      return {
        ...state,
        tagFilter: removedTagFilter,
        filteredItems: removedFilteredByTagItems,
      };
    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.payload };
    default:
      return state;
  }
};

export { productsReducers };
