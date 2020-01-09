import React from "react";

const Comment = ({ text, agree, against, id, plus, minus }) => (
  <li key={id} style={{ padding: "1rem 1rem 0 0" }}>
    {" "}
    <button style={{ color: "#f00" }} onClick={() => minus(id)}>
      <span>
        <i className="material-icons md-18">thumb_down</i>
      </span>
      <span style={{ color: "#000" }}>{against}</span>
    </button>
    {text}{" "}
    <span style={{ color: "#00f" }}>
      Total votes:{" "}
      <strong
        style={
          agree > against
            ? { color: "#0f0" }
            : agree < against
            ? { color: "#f00" }
            : { color: "#000" }
        }
      >
        {agree + against}
      </strong>
    </span>{" "}
    <button style={{ color: "#0f0" }} onClick={() => plus(id)}>
      <span>
        <i className="material-icons md-18">thumb_up</i>
      </span>
      <span style={{ color: "#000" }}>{agree}</span>
    </button>
  </li>
);

export default Comment;
