import types from "./types";

export const addComment = newComment => ({
  type: types.ADD_COMMENT,
  newComment
});

export const removeComment = id2remove => ({
  type: types.REMOVE_COMMENT,
  id2remove
});

export const editComment = (id2comment, updatedComment) => ({
  types: types.EDIT_COMMENT,
  id2comment,
  updatedComment
});

export const thumUp = id2thum => ({
  types: types.THUMB_UP_COMMENT,
  id2thum
});

export const thumDown = id2thum => ({
  types: types.THUMB_DOWN_COMMENT,
  id2thum
});

export default {
  addComment,
  removeComment,
  editComment,
  thumUp,
  thumDown
};
