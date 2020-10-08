import { createReducer } from "./reducerUtil";
import {
  MAKE_REQUEST,
  GET_DATA,
  JOB_ERROR,
  UPDATE_NEXT_PAGE,
  UPDATE_PAGE,
} from "../types/jobTypes";

const initialState = {
  jobs: [],
  error: false,
  loading: false,
  hasNextPage: false,
  page: 1,
  savedJobs: [],
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
    jobs: payload,
  };
};
const updateNextPage = (state = initialState, payload) => {
  return {
    ...state,
    hasNextPage: payload,
  };
};
const updatePage = (state = initialState, payload) => {
  return {
    ...state,
    page: payload,
    hasNextPage: false,
  };
};
const handleError = (state = initialState, payload) => {
  return {
    ...state,
    loading: false,
    jobb: [],
    error: payload,
  };
};

export default createReducer(initialState, {
  [MAKE_REQUEST]: makeRequest,
  [GET_DATA]: getData,
  [JOB_ERROR]: handleError,
  [UPDATE_NEXT_PAGE]: updateNextPage,
  [UPDATE_PAGE]: updatePage,
});
