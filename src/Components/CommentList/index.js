import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Comment from '../Comment';

const CommentList = props => {
  return (
    <div className="App_comments">
      {props.comments.map(comment => (
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
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      author: PropTypes.string,
      comment: PropTypes.string,
      id: PropTypes.number
    })
  ).isRequired
};

const mapStateToProps = ({ comments }) => ({
  comments
});

export default connect(mapStateToProps)(CommentList);
