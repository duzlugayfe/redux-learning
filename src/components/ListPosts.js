import React, { useEffect } from "react";
import { Button, Col, Container, Row, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../store/post/postAction";
import { getPostLoading, postList } from "../store/post/postSelector";

export default function ListPosts() {
  const dispatch = useDispatch();
  const postListSelector = useSelector(postList);
  const getPostLoadingSelector = useSelector(getPostLoading);

  useEffect(() => {
    getPostList();
  }, []);
  const getPostList = () => {
    dispatch(getPosts());
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
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                {post.title}
                <Button size="sm" variant="outline-danger">
                  <i className="fa-solid fa-trash"></i>
                </Button>
              </li>
            ))}
          </ul>
        </Col>
      </Row>
    </Container>
  );
}
