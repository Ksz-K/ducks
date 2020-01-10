import types from "./types";

const initialState = {
  messages: [
    {
      text: "Hello Jimmy",
      from: "Max",
      id: 1,
      score: null
    },
    {
      text: "Hello Max",
      from: "Jimmy",
      id: 2,
      score: null
    },
    {
      text: "How are you?",
      from: "Max",
      id: 3,
      score: null
    }
  ],
  users: ["Jimmy", "Max"]
};

const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_COMMENT:
      return {
        ...state,
        messages: [...state.messages, action.newComment]
      };
    case types.REMOVE_COMMENT:
      return {
        ...state,
        messages: state.messages.filter(
          chosen => chosen.id !== action.id2remove
        )
      };
    case types.EDIT_COMMENT:
      return {
        ...state,
        messages: state.messages.map(message =>
          message.id === action.id2comment
            ? {
                text: action.updatedComment,
                from: message.from,
                id: message.id,
                score: message.score
              }
            : message
        )
      };
    case types.THUMB_UP_COMMENT:
      return {
        ...state,
        messages: state.messages.map(message =>
          message.id === action.id2thum
            ? {
                text: message.text,
                from: message.from,
                id: message.id,
                score: 1
              }
            : message
        )
      };
    case types.THUMB_DOWN_COMMENT:
      return {
        ...state,
        messages: state.messages.map(message =>
          message.id === action.id2thum
            ? {
                text: message.text,
                from: message.from,
                id: message.id,
                score: -1
              }
            : message
        )
      };
    case types.NEW_USER:
      return {
        ...state,
        users: [...state.users, action.nick]
      };
    default:
      return state;
  }
};

export default messageReducer;
