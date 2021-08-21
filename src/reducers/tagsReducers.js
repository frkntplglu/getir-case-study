import {
  TAGS_FETCH,
  TAGS_FETCH_FAIL,
  TAGS_FETCH_SUCCESS,
} from "../actions/types";

export const tagsReducers = (state = { loading: true, items: [] }, action) => {
  switch (action.type) {
    case TAGS_FETCH:
      return { loading: true, items: [] };
    case TAGS_FETCH_SUCCESS:
      return { loading: false, items: action.payload };
    case TAGS_FETCH_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
