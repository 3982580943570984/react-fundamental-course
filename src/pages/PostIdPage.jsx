import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PostService from "../API/PostService.js";
import Loader from "../components/UI/loader/Loader.jsx";
import { useFetching } from "../hooks/useFetching.js";

const PostIdPage = () => {
  const params = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);

  const [fetchPostById, isLoading, postError] = useFetching(async () => {
    const response = await PostService.getPostById(params.id);
    setPost(response.data);
  });

  const [fetchPostComments, isCommentLoading, commmentError] = useFetching(
    async () => {
      const response = await PostService.getPostComments(params.id);
      setComments(response.data);
    }
  );

  useEffect(() => {
    fetchPostById();
    fetchPostComments();
  }, []);

  return (
    <div>
      <h1 style={{ color: "white" }}>Post {post.id}</h1>
      {isLoading ? (
        <Loader />
      ) : (
        <div style={{ margin: "10px auto", color: "white" }}>
          {post.id}. {post.title}
        </div>
      )}
      <h1 style={{ color: "white" }}>Comments</h1>
      {isCommentLoading ? (
        <Loader />
      ) : (
        <div>
          {comments.map((comment) => (
            <div
              style={{
                margin: "15px auto",
                width: "600px",
                color: "white",
                border: " 1px solid pink",
                padding: "0px 5px",
              }}
              key={comment.email}
            >
              <h5 style={{ marginTop: "10px" }}>{comment.email}</h5>
              <div style={{ margin: "10px auto", color: "white" }}>
                {comment.body}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PostIdPage;
