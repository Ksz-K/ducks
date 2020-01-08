import types from "./types";

const newUser = nick => ({
  types: types.NEW_USER,
  nick
});

export default {
  newUser
};
