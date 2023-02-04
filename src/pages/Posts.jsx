import React, { useState, useEffect, useRef } from "react";
import PostList from "../components/PostList";
import PostForm from "../components/PostForm";
import PostFilter from "../components/PostFilter";
import Modal from "../components/UI/modal/Modal";
import Button from "../components/UI/button/Button";
import "../styles/App.css";
import { usePosts } from "../hooks/usePosts";
import PostService from "../API/PostService";
import Loader from "../components/UI/loader/Loader";
import { useFetching } from "../hooks/useFetching";
import { getPageCount } from "../utils/pages";
import Pagination from "../components/UI/pagination/Pagination";
import useObserver from "../hooks/useObserver";
import Select from "../components/UI/select/Select";

// useRef(); - Этот хук позволяет получать доступ к DOM-элементу
// useMemo(); - Этот хук позволяет кэшировать информацию

function Posts() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const sortedAndSearchedPosts = usePosts(posts, filter.query, filter.sort);
  const lastElement = useRef();

  const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
    const response = await PostService.getAll(limit, page);
    setPosts([...posts, ...response.data]);
    const totalCount = response.headers["x-total-count"];
    setTotalPages(getPageCount(totalCount, limit));
  });

  useObserver(lastElement, page < totalPages, isPostsLoading, () => {
    setPage(page + 1);
  });

  useEffect(() => {
    fetchPosts(limit, page);
  }, [page, limit]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  const deletePost = (remove_post) => {
    setPosts(posts.filter((post) => post.id !== remove_post.id));
  };

  return (
    <div className="App">
      <Button onClick={fetchPosts}>Get Posts</Button>
      <Button style={{ marginTop: "10px" }} onClick={() => setModal(true)}>
        Create post
      </Button>
      <Modal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </Modal>

      <hr style={{ margin: "10px 0px" }} />
      {/* Управляемый элемент */}
      <PostFilter filter={filter} setFilter={setFilter} />
      <Select
        value={limit}
        onChange={(value) => setLimit(value)}
        defaultValue={"Кол-во элементов на странице"}
        options={[
          { value: 5, name: "5" },
          { value: 15, name: "15" },
          { value: 25, name: "25" },
          { value: -1, name: "Show all" },
        ]}
      />
      {/* Условная отрисовка */}
      {postError && (
        <h1 style={{ textAlign: "center", color: "white" }}>{postError}</h1>
      )}
      <PostList
        deletePost={deletePost}
        posts={sortedAndSearchedPosts}
        title={"3982580943570984"}
      />
      <div
        ref={lastElement}
        style={{ height: "20px", background: "pink" }}
      ></div>
      {isPostsLoading && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "50px",
          }}
        >
          <Loader />
        </div>
      )}

      <Pagination
        totalPages={totalPages}
        currentPage={page}
        setPage={setPage}
      />
    </div>
  );
}

export default Posts;
