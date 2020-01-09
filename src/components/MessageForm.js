import React from "react";
import uuid from "uuid";

const MessageForm = props => {
  const chatInput = React.createRef();

  const addChat = e => {
    e.preventDefault();
    const newText = chatInput.current.value;
    const newComment = {
      text: newText,
      from: "User - it will be changed when authorizanit is added",
      id: uuid.v4(),
      agree: 0,
      against: 0
    };
    props.add(newComment);
    chatInput.current.value = "";
  };

  return (
    <form style={{ marginLeft: "3rem" }} onSubmit={addChat}>
      <input ref={chatInput} />
      <button type="submit">Add your opinion</button>
    </form>
  );
};

export default MessageForm;
