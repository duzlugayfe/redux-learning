import React, { useState } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  Modal,
  Row,
  Spinner,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addPosts } from "../store/post/postAction";
import { addPostLoading } from "../store/post/postSelector";
export default function AddPost() {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [postName, setPostName] = useState("");
  const [postStatus, setPostStatus] = useState("pending");
  const addPostLoadingSelector = useSelector(addPostLoading);
  const onHide = () => {
    setShowModal(false);
  };
  const handlePostNameChange = (e) => {
    setPostName(e.target.value);
  };
  const handleRadoChance = (e) => {
    setPostStatus(e.target.value);
  };

  const handleSubmit = async () => {
    console.log(postName, postStatus);
    try {
      await dispatch(
        addPosts({
          title: postName,
          isCompleted: postStatus === "completed",
        })
      );
      setShowModal(false);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Container>
      <Row className="mt-3">
        <Col md={{ span: 3, offset: 10 }}>
          <Button variant="secondary" onClick={() => setShowModal(true)}>
            <i className="fa-solid fa-plus"></i>Add Post
          </Button>
        </Col>
      </Row>

      <Modal
        show={showModal}
        onHide={() => onHide()}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Add Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form autoComplete="off" noValidate>
            <Form.Group className="mb-3" controlId="formBasicPost">
              <Form.Label>Post Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Post Name"
                value={postName}
                onChange={handlePostNameChange}
              />
            </Form.Group>
            <fieldset>
              <Form.Group as={Row} onChange={handleRadoChance} className="mb-3">
                <Form.Label as="legend" column sm={2}>
                  Post Status
                </Form.Label>
                <Col sm={10}>
                  <Form.Check
                    type="radio"
                    label="Pending"
                    name="postStatus"
                    value="pending"
                    id="pending"
                    defaultChecked
                  />
                  <Form.Check
                    type="radio"
                    label="Completed"
                    name="postStatus"
                    value="completed"
                    id="completed"
                  />
                </Col>
              </Form.Group>
            </fieldset>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={() => onHide()}>
            Cancel
          </Button>
          <Button variant="secondary" onClick={() => handleSubmit()}>
            {addPostLoadingSelector && <Spinner animation="border" size="sm" />}
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}
