import {
  GET_COMMENTS,
  CREATE_COMMENT_FAILURE,
  CREATE_COMMENT_REQUEST,
  CREATE_COMMENT_SUCCESS
} from '../actions/comments';

const initialState = {
  result: [],
  error: false,
  loading: false
};

/* const getId = (() => {
  let idCounter = 0;
  return () => ++idCounter;
})(); */

const commentReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COMMENTS:
      return state;
    case CREATE_COMMENT_REQUEST:
      return {
        ...state,
        loading: true,
        error: false
      };
    case CREATE_COMMENT_SUCCESS:
      return {
        ...state,
        result: [...state.result, action.payload],
        loading: false,
        error: false
      };
    case CREATE_COMMENT_FAILURE:
      return {
        ...state,
        error: true,
        loading: false
      };
    default:
      return state;
  }
};

export default commentReducer;
