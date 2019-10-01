import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import { createComment, getComments } from '../../actions/comments';

const CommentForm = props => {
  const [comment, setComment] = useState({
    author: '',
    comment: ''
  });

  const handleChange = (value, label) => {
    setComment({
      ...comment,
      [label]: value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.createComment(comment);
    setComment({ author: '', comment: '' });
  };

  return (
    <div className="App_form">
      <form onSubmit={handleSubmit}>
        <div className="App_label-group">
          <label>Name:</label>
          <input
            value={comment.author}
            onChange={e => handleChange(e.target.value, 'author')}
          />
        </div>
        <div className="App_label-group">
          <label>*Comment:</label>
          <textarea
            value={comment.comment}
            onChange={e => handleChange(e.target.value, 'comment')}
          />
        </div>
        <button disabled={!comment.comment || !comment.author} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

CommentForm.propTypes = {
  createComment: PropTypes.func.isRequired,
  getComments: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      createComment,
      getComments
    },
    dispatch
  );

export default connect(
  null,
  mapDispatchToProps
)(CommentForm);
