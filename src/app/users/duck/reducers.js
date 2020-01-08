import types from "./types";

const INITIAL_STATE = {
  users: ["Jimmy", "Max"]
};

const usersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.NEW_USER:
      return {
        ...state,
        users: [...state.users, action.nick]
      };
    default:
      return state;
  }
};

export default usersReducer;
