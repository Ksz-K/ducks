import types from "./types";

const initialState = {
  users: ["Jimmy", "Max"]
};

const usersReducer = (state = initialState, action) => {
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
