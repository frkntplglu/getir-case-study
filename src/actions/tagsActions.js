import axios from "axios";
import {
  TAGS_FETCH,
  TAGS_FETCH_FAIL,
  TAGS_FETCH_SUCCESS,
} from "../actions/types";

export const getAllTags = () => async (dispatch) => {
  try {
    dispatch({ type: TAGS_FETCH });
    const { data } = await axios.get("http://localhost:3001/tags");
    dispatch({ type: TAGS_FETCH_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: TAGS_FETCH_FAIL, payload: error });
  }
};
