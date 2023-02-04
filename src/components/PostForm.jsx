import React, { useState } from "react";
import Button from "./UI/button/Button";
import Input from "./UI/input/Input";

const PostForm = ({ create }) => {
  const [post, setPost] = useState({ title: "", body: "" });
  const addNewPost = (event) => {
    event.preventDefault();
    const newPost = { ...post, id: Date.now() };
    create(newPost);
    setPost({ title: "", body: "" });
  };
  return (
    <form>
      <Input
        type="text"
        placeholder="Post title"
        value={post.title}
        onChange={(event) => setPost({ ...post, title: event.target.value })}
      />
      <Input
        type="text"
        placeholder="Post description"
        value={post.body}
        onChange={(event) => setPost({ ...post, body: event.target.value })}
      />
      <Button title={"Create post"} onClick={addNewPost}>
        Create post
      </Button>
    </form>
  );
};

export default PostForm;
