import { combineReducers } from "redux";
import messageReducer from "./reducers";
export { default as Types } from "./types";
export { default as Actions } from "./actions";

export default combineReducers({
  chat: messageReducer
});
