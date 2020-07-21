import { createReducer } from "./reducerUtil";
import { MAKE_REQUEST, GET_DATA, JOB_ERROR } from "../types/jobTypes";

const initialState = {
  jobs: [],
  error: false,
  loading: false,
};

const makeRequest = (state = initialState, payload) => {
  return {
    ...state,
    loading: true,
    jobs: [],
  };
};

const getData = (state = initialState, payload) => {
  return {
    ...state,
    loading: false,
    jobs: payload.jobs,
  };
};

const handleError = (state = initialState, payload) => {
  return {
    ...state,
    loading: false,
    jobb: [],
    error: payload.error,
  };
};

export default createReducer(initialState, {
  [MAKE_REQUEST]: makeRequest,
  [GET_DATA]: getData,
  [JOB_ERROR]: handleError,
});
