import { MAKE_REQUEST, GET_DATA, JOB_ERROR } from "../types/jobTypes";
import axios from "axios";
import { axiosGhAPI } from "../../utils/axiosCalls";

export const fetchData = (params, page, cancelToken) => async (dispatch) => {
  try {
    dispatch({ type: MAKE_REQUEST, payload: null });
    const jobs = await axiosGhAPI().get("/", {
      cancelToken: cancelToken.token,
      params: { markdown: true, page, ...params },
    });
    // console.log(jobs.data);
    dispatch({ type: GET_DATA, payload: jobs.data });
  } catch (err) {
    // if (axios.isCancel(err)) {
    //   return;
    // }
    dispatch({ type: JOB_ERROR, payload: err.message });
  }
};
