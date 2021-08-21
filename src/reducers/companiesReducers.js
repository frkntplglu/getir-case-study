import {
  COMPANIES_FETCH,
  COMPANIES_FETCH_SUCCESS,
  COMPANIES_FETCH_FAIL,
} from "../actions/types";

const companiesReducer = (state = { loading: true, items: [] }, action) => {
  switch (action.type) {
    case COMPANIES_FETCH:
      return { loading: true, items: [] };
    case COMPANIES_FETCH_SUCCESS:
      return { loading: false, items: action.payload };
    case COMPANIES_FETCH_FAIL:
      return { loading: false, items: [], error: action.payload };
    default:
      return state;
  }
};

export { companiesReducer };
