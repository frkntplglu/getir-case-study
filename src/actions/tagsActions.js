import getirAPI from "../services/getirAPI";

import {
  TAGS_FETCH,
  TAGS_FETCH_FAIL,
  TAGS_FETCH_SUCCESS,
} from "../actions/types";

const getAllTags = () => async (dispatch) => {
  try {
    dispatch({ type: TAGS_FETCH });
    const { data } = await getirAPI.get("/tags");
    dispatch({ type: TAGS_FETCH_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: TAGS_FETCH_FAIL, payload: error.message });
  }
};

export { getAllTags };
