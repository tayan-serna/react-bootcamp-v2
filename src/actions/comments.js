export const CREATE_COMMENT_SUCCESS = 'CREATE_COMMENT_SUCCESS';
export const CREATE_COMMENT_FAILURE = 'CREATE_COMMENT_FAILURE';
export const CREATE_COMMENT_REQUEST = 'CREATE_COMMENT_REQUEST';
export const GET_COMMENTS = 'GET_COMMENTS';

const serverUrl = 'http://localhost:3004/comments';

export const getComments = () => ({
  type: GET_COMMENTS
});

/* export const createCommentOld = payload => ({
  type: CREATE_COMMENT,
  payload
}); */

export const createComment = payload => dispatch => {
  dispatch({
    type: CREATE_COMMENT_REQUEST
  });
  console.log(payload);
  fetch(serverUrl, {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => res.json())
    .then(res => {
      console.log(res);
      dispatch({
        type: CREATE_COMMENT_SUCCESS,
        payload: res
      });
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: CREATE_COMMENT_FAILURE,
        payload: err
      });
    });
};
