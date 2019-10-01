import { GET_COMMENTS, CREATE_COMMENT } from '../actions/comments';

const initialState = [];
const getId = (() => {
  let idCounter = 0;
  return () => ++idCounter;
})();

const commentReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COMMENTS:
      return state;
    case CREATE_COMMENT:
      return [...state, { ...action.payload, id: getId() }];
    default:
      return state;
  }
};

export default commentReducer;
