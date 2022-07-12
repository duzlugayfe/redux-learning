import React, { useEffect } from "react";
import { Button, Col, Container, Row, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { deletePost, getPosts } from "../store/post/postAction";
import {
  getPostLoading,
  postList,
  deletePostLoading,
} from "../store/post/postSelector";

export default function ListPosts() {
  const dispatch = useDispatch();
  const postListSelector = useSelector(postList);
  const getPostLoadingSelector = useSelector(getPostLoading);
  const deletePostLoadingSelector = useSelector(deletePostLoading);
  useEffect(() => {
    getPostList();
  }, []);
  const getPostList = () => {
    dispatch(getPosts());
  };
  const removePost = (post) => {
    dispatch(deletePost(post.id));
  };
  return (
    <Container>
      {getPostLoadingSelector && (
        <Spinner animation="border" className="page-loader" />
      )}
      <Row className="justfy-content-center mt-2">
        <Col>
          <ul className="list-group">
            {postListSelector?.map((post) => (
              <li
                key={post.id}
                className={`${
                  post.isCompleted ? "post-completed" : "post-pending"
                } list-group-item d-flex justify-content-between align-items-center`}
              >
                {post.title}
                <Button
                  size="sm"
                  variant="outline-danger"
                  onClick={() => removePost(post)}
                >
                  <i className="fa-solid fa-trash"></i>
                  {deletePostLoadingSelector && (
                    <Spinner animation="border" size="sm" />
                  )}
                </Button>
              </li>
            ))}
          </ul>
        </Col>
      </Row>
    </Container>
  );
}
