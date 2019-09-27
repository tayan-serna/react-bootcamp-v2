import { GET_COMMENTS, CREATE_COMMENT } from '../actions/comments';

const initialState = {
  comments: []
};

const commentRecuder = (state = initialState, action) => {
  switch (action.type) {
    case GET_COMMENTS:
      return state.comments;
    case CREATE_COMMENT:
      return {
        ...state,
        comments: [...state.comments, action.payload]
      };
    default:
      return state;
  }
};

export default commentRecuder;
