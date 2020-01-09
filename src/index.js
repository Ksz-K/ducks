import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";
import actions from "./app/messages/duck/actions";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// store.dispatch(
//   actions.addComment({
//     text: "Message One",
//     from: "Test User",
//     id: 777,
//     agree: 0,
//     against: 0
//   })
// );

//store.dispatch(actions.thumUp(1));
