import React, { Fragment } from "react";
import Header from "./components/Header";
import CommentsListContainer from "./components/CommentsListContainer";
import MessageForm from "./components/MessageFormContainer";
import "./App.css";

function App() {
  return (
    <Fragment>
      <Header />
      <CommentsListContainer />
      <MessageForm />
    </Fragment>
  );
}

export default App;
