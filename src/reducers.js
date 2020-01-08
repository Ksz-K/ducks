import { combineReducers } from "redux";
import messageReducer from "./app/messages/duck";
import usersReducer from "./app/users/duck";

const rootReducer = combineReducers({
  messages: messageReducer,
  users: usersReducer
});

export default rootReducer;
