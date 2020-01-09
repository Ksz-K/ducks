import { combineReducers } from "redux";
import messageReducer from "./app/messages/duck";
import usersReducer from "./app/users/duck";

const rootReducer = combineReducers({
  chat: messageReducer,
  subscribers: usersReducer
});

export default rootReducer;
