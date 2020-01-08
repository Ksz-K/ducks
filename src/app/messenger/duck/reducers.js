import types from "./types";

const INITIAL_STATE = {
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

const messageReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.ADD_COMMENT:
      return {
        ...state,
        messages: [...state.messages, action.newComment]
      };
    case types.REMOVE_COMMENT:
      return {
        ...state,
        messages: [...state.messages, action.item]
      };
    case types.EDIT_COMMENT:
      return {
        ...state,
        list: [...state.list, action.item]
      };
    case types.THUMB_UP_COMMENT:
      return {
        ...state,
        list: [...state.list, action.item]
      };
    case types.THUMB_DOWN_COMMENT:
      return {
        ...state,
        list: [...state.list, action.item]
      };
    case types.NEW_USER:
      return {
        ...state,
        users: [...state.users, action.item]
      };
    default:
      return state;
  }
};

export default messageReducer;
