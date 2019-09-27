export const CREATE_COMMENT = 'CREATE_COMMENT';
export const GET_COMMENTS = 'GET_COMMENTS';

export const getComments = () => ({
  type: GET_COMMENTS
});

export const createComment = payload => ({
  type: CREATE_COMMENT,
  payload
});
