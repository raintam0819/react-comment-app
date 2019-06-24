// action types
const INIT_COMMENT = 'INIT_COMMENT'
const ADD_COMMENT = 'ADD_COMMENT'
const DELETE_COMMENT = 'DELETE_COMMENT'

export default function (state, action) {
  if(!state) {
    state = { comments: [] }
  }
  switch (action.type) {
    case INIT_COMMENT:
      // 初始化评论
      return { comments: action.comments }
    case ADD_COMMENT:
      // 新增评论
      return {
        comments: [...state.comments, action.comment]
      }
    case DELETE_COMMENT:
      // 删除评论
      return {
        comments: [
          ...state.comments.slice(0, action.commentIndex),
          ...state.comments.slice(action.commentIndex + 1)
        ]
      }
    default:
      return state
  }
}

//action creators
export const initComments = (comments) => {
  return { type: INIT_COMMENT, comments }
}

export const addComment = (comment) => {
  return { type: ADD_COMMENT, comment }
}

export const deleteComment = (comment) => {
  return { type: DELETE_COMMENT, comment }
}