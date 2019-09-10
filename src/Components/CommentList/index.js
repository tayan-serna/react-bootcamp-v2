import React from 'react';
import Comment from '../Comment';

const CommentList = () => {
  return (
    <div className="App_comments">
      <Comment
        comment="lorem loremlorem loremlorem loremlorem lorem lorem loremlorem loremlorem
        lorem lorem lorem lorem loremlorem loremlorem loremlorem loremlorem
        loremlorem lorem"
        author="Adrian"
      />
      <Comment
        comment="lorem loremlorem loremlorem loremlorem lorem lorem loremlorem loremlorem
        lorem lorem lorem lorem loremlorem loremlorem loremlorem loremlorem
        loremlorem lorem"
        author="Chiforinfulo"
      />
      <Comment
        comment="lorem loremlorem loremlorem loremlorem lorem lorem loremlorem loremlorem
        lorem lorem lorem lorem loremlorem loremlorem loremlorem loremlorem
        loremlorem lorem"
        author="Anastacio"
      />
      <Comment
        comment="lorem loremlorem loremlorem loremlorem lorem lorem loremlorem loremlorem
        lorem lorem lorem lorem loremlorem loremlorem loremlorem loremlorem
        loremlorem lorem"
        author="Lorenzo"
      />
      <Comment
        comment="lorem loremlorem loremlorem loremlorem lorem lorem loremlorem loremlorem
        lorem lorem lorem lorem loremlorem loremlorem loremlorem loremlorem
        loremlorem lorem"
        author="Pedrito"
      />
    </div>
  );
};

export default CommentList;
