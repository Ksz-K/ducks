import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./app/messenger/duck";

const store = createStore(rootReducer, composeWithDevTools());

export default store;
