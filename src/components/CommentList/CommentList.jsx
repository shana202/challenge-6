
import React from "react";
import Comments from "../Comments/Comments";
import styles from "./CommentList.module.css";


const CommentList = ({ comments }) => {
  if (!comments || comments.length === 0) {
    return <p className={styles.noComments}>No comments yet.</p>;
  }

  return (
    <div className={styles.commentList} aria-live="polite">
      {comments.map((comment) => (
        <Comments
          key={comment.id}
          avatar={comment.avatar}
          name={comment.name}
          text={comment.text}
          date={comments.date}
        />
      ))}
    </div>
  );
};

export default CommentList;