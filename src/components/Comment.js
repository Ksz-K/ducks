import React from "react";

const Comment = ({ text, score }) => (
  <li>
    {text} <span>votes: {score}</span>
  </li>
);

export default Comment;
