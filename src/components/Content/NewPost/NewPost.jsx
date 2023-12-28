import React from "react";
import posts from "../NewPost/NewPost.module.css";

const NewPost = (props) => {
  return (
    <div className={posts.post}>
      <div className={posts.headerContainer}>
        <span className={posts.postHeader}>{props.title}</span>
      </div>
      <div className={posts.textContainer}>
        <p className={posts.text}>{props.content}</p>
      </div>
    </div>
  );
};

export default NewPost;
