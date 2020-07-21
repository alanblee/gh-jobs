import { MAKE_REQUEST, GET_DATA, JOB_ERROR } from "../types/jobTypes";
import { axiosGhAPI } from "../../utils/axiosCalls";

export const fetchData = (params, page) => async (dispatch) => {
  try {
    dispatch({ type: MAKE_REQUEST, payload: null });
    const jobs = await axiosGhAPI().get("/");
    console.log(jobs);
    dispatch({ type: GET_DATA, payload: jobs });
  } catch (err) {
    console.log(err.message);
  }
};
