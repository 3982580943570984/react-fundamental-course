import React from "react";
import PostItem from "./PostItem";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const PostList = ({ posts, title, deletePost }) => {
  if (!posts.length) {
    return <h1 style={{ textAlign: "center", color: "white" }}>No bitches</h1>;
  }

  return (
    <div>
      <h1
        style={{
          marginTop: "10px",
          textAlign: "center",
          color: "white",
        }}
      >
        {title}
      </h1>
      <TransitionGroup>
        {posts.map((post, index) => (
          <CSSTransition key={post.id} timeout={500} classNames="post">
            <PostItem
              deletePost={deletePost}
              post={post}
              number={index + 1}
              key={post.id}
            />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
};

export default PostList;
