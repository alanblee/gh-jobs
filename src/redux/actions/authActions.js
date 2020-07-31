import { axiosWithAuth } from "../../utils/axiosCalls";
import { LOGIN_USER, REGISTER_USER, AUTH_ERROR } from "../types/authTypes";

export const registerUser = (credentials) => async (dispatch) => {
  try {
    const user = await axiosWithAuth().post("/api/auth/register", credentials);
    dispatch({ type: REGISTER_USER, payload: user });
  } catch (err) {
    dispatch({ type: AUTH_ERROR, payload: err.message });
  }
};
export const loginUser = (credentials, redirect) => async (dispatch) => {
  try {
    const user = await axiosWithAuth().post("/api/auth/login", credentials);
    dispatch({ type: LOGIN_USER, payload: user.data });
    localStorage.setItem("token", user.data.token);
    redirect();
  } catch (err) {
    dispatch({ type: AUTH_ERROR, payload: err.message });
  }
};

export const getUser = () => async (dispatch) => {
  try {
    const user = await axiosWithAuth().get("/api/users");
    dispatch({ type: LOGIN_USER, payload: user.data });
  } catch (err) {
    dispatch({ type: AUTH_ERROR, payload: err.message });
  }
};
