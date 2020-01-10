import types from "./types";

const initialState = {
  messages: [
    {
      text: "Hu is the new leader of China.",
      from: "Max",
      id: 1,
      agree: 0,
      against: 0
    },
    {
      text: "Who is the new leader of China ?",
      from: "Jimmy",
      id: 2,
      agree: 0,
      against: 0
    },
    {
      text: "Maybe we should ask Kofi ?",
      from: "Max",
      id: 3,
      agree: 0,
      against: 0
    }
  ]
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
                agree: message.agree,
                against: message.against
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
                agree: message.agree + 1,
                against: message.against
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
                agree: message.agree,
                against: message.against + 1
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
