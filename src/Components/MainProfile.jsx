import React, { Component } from "react";
import { Button, Col, Container, Form, Modal, Row } from "react-bootstrap";
import imageProfile from "../Netflix-assets/assets/avatar.png";

class EditProfile extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState({ showModal: true });
  };

  closeModal = () => {
    this.setState({ showModal: false });
  };
  render() {
    return (
      <main>
        <Container className="text-white" style={{ maxWidth: "700px" }}>
          <Row>
            <Col>
              <h2 className="display-3">Edit Profile</h2>
              <hr />
            </Col>
          </Row>
          <Row>
            <Col sm={6} md={4}>
              <div className="position-relative">
                <img src={imageProfile} alt="avatar" className="img-fluid" />
                <Button
                  id="editAvatar"
                  variant="dark"
                  className="btn-sm rounded-circle border border-2 position-absolute start-0 bottom-0 mb-2 ms-2"
                >
                  <i className="bi bi-pencil-fill"></i>
                </Button>
              </div>
            </Col>
            <Col md={8}>
              <Form className="mt-3 mt-md-0">
                <Form.Group className="mb-4 user">
                  <Form.Control
                    type="text"
                    className="bg-secondary border-0 text-white rounded-1 fw-normal"
                    id="name"
                    placeholder="Strive Student"
                  />
                </Form.Group>
                <Form.Group className="mb-4">
                  <Form.Label className="mb-3 fw-normal ">Language:</Form.Label>
                  <Form.Select
                    className="bg-black text-white w-25 rounded rounded-0"
                    id="language"
                    aria-label="Default select example"
                  >
                    <option>English</option>
                    <option value="1">Italian</option>
                    <option value="2">Franch</option>
                    <option value="3">Spanish</option>
                  </Form.Select>
                  <hr />
                </Form.Group>
                <Form.Group className="mb-4">
                  <Form.Label className="mb-3 fw-normal">
                    Maturity settings:
                  </Form.Label>
                  <div
                    className="bg-dark py-1 px-2 d-md--block"
                    id="maturityHelp"
                  >
                    ALL MATURITY RATINGS RATINGS
                  </div>
                  <p className="my-3">
                    Show titles of all maturity ratings for this profile.
                  </p>
                  <Button
                    variant="outline-secondary"
                    className="px-4 py-1 rounded-0"
                  >
                    EDIT
                  </Button>
                  <hr />
                </Form.Group>
                <Form.Group className="mb-4">
                  <Form.Label className="mb-3 fw-normal">
                    Autoplay controls
                  </Form.Label>
                  <Form.Check
                    className="custom-checkbox"
                    type="checkbox"
                    label="Autoplay next episode In a serles on all devices."
                    id="autoplayEpisode"
                  />
                  <Form.Check
                    className="custom-checkbox"
                    type="checkbox"
                    label="Autoplay previews whlle browsing on all devices."
                    id="autoplayPreview"
                  />
                </Form.Group>
              </Form>
            </Col>
          </Row>
          <hr />
          <Row>
            <Col className="d-flex flex-wrap gap-3 mb-3">
              <Button
                variant="outline-secondary"
                className="rounded-0 px-4 py-2"
              >
                SAVE
              </Button>
              <Button
                variant="outline-secondary"
                className="rounded-0 px-4 py-2"
              >
                CANCEL
              </Button>
              <Button
                variant="outline-secondary"
                className="rounded-0 px-4 py-2"
                onClick={this.toggleModal}
              >
                DELETE PROFILE
              </Button>
            </Col>
          </Row>
        </Container>

        <Modal
          show={this.state.showModal}
          onHide={this.closeModal}
          backdrop="static"
          data-bs-theme="dark"
          className="text-white"
        >
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.closeModal}>
              Close
            </Button>
            <Button variant="danger" onClick={this.closeModal}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </main>
    );
  }
}

export default EditProfile;

// Funzione per la gestione del clic dei pulsanti
