import types from "./types";

const addComment = newComment => ({
  type: types.ADD_COMMENT,
  newComment
});

const removeComment = id2remove => ({
  type: types.REMOVE_COMMENT,
  id2remove
});

const editComment = (id2comment, updatedComment) => ({
  types: types.EDIT_COMMENT,
  id2comment,
  updatedComment
});

const thumUp = id2thum => ({
  types: types.THUMB_UP_COMMENT,
  id2thum
});

const thumDown = id2thum => ({
  types: types.THUMB_DOWN_COMMENT,
  id2thum
});

const newUser = nick => ({
  types: types.NEW_USER,
  nick
});

export default {
  addComment,
  removeComment,
  editComment,
  thumUp,
  thumDown,
  newUser
};
