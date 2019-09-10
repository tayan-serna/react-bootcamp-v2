import React from 'react';
import PropTypes from 'prop-types';

const Comment = props => {
  return (
    <div className="App_comment">
      <p>{props.comment}</p>
      <span>By: {props.author}</span>
    </div>
  );
};

Comment.propTypes = {
  comment: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired
};

export default Comment;
