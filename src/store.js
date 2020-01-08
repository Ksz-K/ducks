import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./app/messages/duck";

const store = createStore(rootReducer, composeWithDevTools());

export default store;
