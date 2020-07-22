import {
  MAKE_REQUEST,
  GET_DATA,
  JOB_ERROR,
  UPDATE_NEXT_PAGE,
  UPDATE_PAGE,
} from "../types/jobTypes";
import axios from "axios";
import { axiosGhAPI } from "../../utils/axiosCalls";

export const fetchData = (params, page, cancelToken, cancelToken2) => async (
  dispatch
) => {
  try {
    dispatch({ type: MAKE_REQUEST, payload: null });
    const jobs = await axiosGhAPI().get("/", {
      cancelToken: cancelToken.token,
      params: { markdown: true, page, ...params },
    });
    const nextPage = await axiosGhAPI().get("/", {
      cancelToken: cancelToken2.token,
      params: { markdown: true, page: page + 1, ...params },
    });
    dispatch({ type: GET_DATA, payload: jobs.data });
    dispatch({ type: UPDATE_NEXT_PAGE, payload: nextPage.length !== 0 });
  } catch (err) {
    if (axios.isCancel(err)) {
      return;
    }
    dispatch({ type: JOB_ERROR, payload: err.message });
  }
};

export const updatePage = (page) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_PAGE, payload: page });
  } catch (err) {
    dispatch({ type: JOB_ERROR, payload: err.message });
  }
};
