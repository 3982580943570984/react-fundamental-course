import React from "react";
import Button from "../components/UI/button/Button";
import { useNavigate } from "react-router-dom";
import "../styles/App.css";

const PostItem = (props) => {
  const router = useNavigate();
  return (
    <div className="post">
      <div className="post_content">
        <strong>
          {props.post.id}.{props.post.title}
        </strong>
        <div>{props.post.body}</div>
      </div>
      <div className="post_btns">
        <Button
          style={{ margin: "4px" }}
          onClick={(event) => {
            event.preventDefault();
            router(`../posts/${props.post.id}`, { replace: true });
          }}
        >
          Open
        </Button>
        <Button
          style={{ margin: "4px" }}
          onClick={() => props.deletePost(props.post)}
        >
          Delete
        </Button>
      </div>
    </div>
  );
};

export default PostItem;
