import types from "./types";

const addComment = newComment => ({
  type: types.ADD_COMMENT,
  newComment
});

const removeComment = item => ({
  type: types.REMOVE_COMMENT,
  item
});

const editComment = item => ({
  types: types.EDIT_COMMENT,
  item
});

const thumUp = item => ({
  types: types.THUMB_UP_COMMENT,
  item
});

const thumDown = item => ({
  types: types.THUMB_DOWN_COMMENT,
  item
});

const newUser = item => ({
  types: types.NEW_USER,
  item
});

export default {
  addComment,
  removeComment,
  editComment,
  thumUp,
  thumDown,
  newUser
};
