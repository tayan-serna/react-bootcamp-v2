import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Comment from '../Comment';

const CommentList = props => {
  if (props.comments.loading) {
    return <div>Loading...</div>;
  }

  if (props.comments.error) {
    return <div>There was an errror :( </div>;
  }

  return (
    <div className="App_comments">
      {props.comments.result.map(comment => (
        <Comment
          key={comment.id}
          comment={comment.comment}
          author={comment.author}
        />
      ))}
    </div>
  );
};

CommentList.propTypes = {
  comments: PropTypes.shape({
    result: PropTypes.arrayOf(
      PropTypes.shape({
        author: PropTypes.string,
        comment: PropTypes.string,
        id: PropTypes.number
      })
    ),
    loading: PropTypes.bool,
    error: PropTypes.bool
  }).isRequired
};

const mapStateToProps = ({ comments }) => ({
  comments
});

export default connect(mapStateToProps)(CommentList);
