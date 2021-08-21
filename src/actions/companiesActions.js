import axios from "axios";
import {
  COMPANIES_FETCH,
  COMPANIES_FETCH_SUCCESS,
  COMPANIES_FETCH_FAIL,
} from "./types";

export const getAllCompanies = () => async (dispatch) => {
  try {
    dispatch({ type: COMPANIES_FETCH, payload: [] });
    const { data } = await axios.get("http://localhost:3001/companies");
    dispatch({ type: COMPANIES_FETCH_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: COMPANIES_FETCH_FAIL, payload: error });
  }
};
