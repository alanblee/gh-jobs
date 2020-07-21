import { MAKE_REQUEST, GET_DATA, JOB_ERROR } from "../types/jobTypes";
import { axiosGhAPI } from "../../utils/axiosCalls";

export const fetchData = (params, page, cancelToken) => async (dispatch) => {
  try {
    dispatch({ type: MAKE_REQUEST, payload: null });
    const jobs = await axiosGhAPI().get("/", {
      cancelToken,
      params: { markdown: true, page, ...params },
    });
    console.log(jobs);
    dispatch({ type: GET_DATA, payload: jobs });
  } catch (err) {
    if (err.message) {
      dispatch({ type: JOB_ERROR, payload: err.message });
    }
  }
};
