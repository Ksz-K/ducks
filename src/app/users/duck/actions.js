import types from "./types";

const newUser = nick => ({
  type: types.NEW_USER,
  nick
});

export default {
  newUser
};
