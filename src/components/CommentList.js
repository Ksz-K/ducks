import React from "react";
import Comment from "./CommentContainer";

const CommentList = ({ messages }) => (
  <ul style={{ listStyle: "none" }}>
    {messages.map(comment => (
      <Comment key={comment.id} {...comment} />
    ))}
  </ul>
);
export default CommentList;
