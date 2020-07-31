import { combineReducers } from "redux";
import jobReducer from "./jobReducer";
import authReducer from "./authReducer";
const rootReducer = combineReducers({
  jobs: jobReducer,
  auth: authReducer,
});

export default rootReducer;
