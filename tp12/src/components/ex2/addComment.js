import React, { useState } from "react";

export default function AddComment(props) {
  const [comment, setComment] = useState("");

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.add(comment); // Call the parent's add function with the new comment
    setComment(""); // Clear the input field
  };

  return (
    <div>
      <h3>Add comment</h3>
      <form onSubmit={handleSubmit}>
          <textarea
            name="comment"
            value={comment}
            onChange={handleCommentChange}
            rows={4}
            cols={40}
          />
        <hr />
        <button type="submit">Save Comment</button>
      </form>
    </div>
  );
}
