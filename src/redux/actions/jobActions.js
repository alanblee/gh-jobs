import { MAKE_REQUEST, GET_DATA, JOB_ERROR } from "../types/jobTypes";
import { axiosGhAPI } from "../../utils/axiosCalls";

export const fetchData = (params, page) => async (dispatch) => {
  try {
    const jobs = await axiosGhAPI.get("/", {
      params: { makrdown: true, page, ...params },
    });
    dispatch({ type: GET_DATA, payload: jobs });
  } catch (err) {}
};
