import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";
 
import {messageActions} from "./app/messages/duck";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

store.dispatch(
  messageActions.addComment({
    text: "Message One",
    from: "Test User",
    id: 777,
    score: null
  })
);
