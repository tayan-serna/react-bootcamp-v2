import React from 'react';

const CommentForm = () => {
  return (
    <div className="App_form">
      <form>
        <div className="App_label-group">
          <label>Name:</label>
          <input />
        </div>
        <div className="App_label-group">
          <label>Comment:</label>
          <textarea />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default CommentForm;
