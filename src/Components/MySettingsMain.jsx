import React from "react";
import { Container, Row, Col, Button, Modal } from "react-bootstrap";
import imageProfile from "../Netflix-assets/assets/avatar.png";

class AccountSettings extends React.Component {
  state = {
    showModal: false,
  };
  render() {
    return (
      <Container
        className="mt-3 pb-3"
        id="settings"
        style={{ maxWidth: "900px", backgroundColor: "white" }}
      >
        <Row>
          <h1>Account</h1>
        </Row>
        <hr />
        <Row>
          <Col md={4}>
            <h2 className="text-body-tertiary fs-5">MEMBERSHIP & BILLING</h2>
            <Button
              variant="outline-danger"
              className="mb-3"
              onClick={() => this.setState({ showModal: true })}
            >
              Cancel Membership
            </Button>
            <Modal
              show={this.state.showModal}
              backdrop="static"
              keyboard={false}
              aria-labelledby="staticBackdropLabel"
              aria-hidden="true"
              onHide={() => this.setState({ showModal: false })}
            >
              <Modal.Header closeButton>
                <Modal.Title className="fs-5" id="staticBackdropLabel">
                  Cancel your account
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                Are you sure you want to delete your account?
              </Modal.Body>
              <Modal.Footer>
                <Button
                  variant="secondary"
                  onClick={() => this.setState({ showModal: false })}
                >
                  Back
                </Button>
                <Button
                  variant="danger"
                  onClick={() => this.setState({ showModal: false })}
                >
                  Cancel
                </Button>
              </Modal.Footer>
            </Modal>
          </Col>
          <Col md={8}>
            <div className="mb-2 d-flex flex-column align-items-start flex-sm-row justify-content-sm-between align-items-md-center">
              <p className="fw-semibold">student@strive.school</p>
              <a className="text-decoration-none custom-anchor" href="#2323">
                Change account email
              </a>
            </div>
            <div className="mb-2 d-flex flex-column align-items-start flex-sm-row justify-content-sm-between align-items-md-center">
              <p className="text-body-tertiary">Password: ********</p>
              <a className="text-decoration-none custom-anchor" href="#2323">
                Change password
              </a>
            </div>
            <div className="mb-2 d-flex flex-column align-items-start flex-sm-row justify-content-sm-between align-items-md-center">
              <p className="text-body-tertiary">Phone: 321 044 1279</p>
              <a className="text-decoration-none custom-anchor" href="#2323">
                Change account email
              </a>
            </div>
            <hr />
            <div className="d-flex flex-column align-items-start flex-sm-row justify-content-sm-between align-items-md-cente mb-4">
              <div className="d-flex align-items-md-center gap-3 mb-3">
                <p className="fw-semibold fst-italic">
                  <i className="bi bi-paypal"></i> PayPal
                </p>
                <p className="fw-semibold">student@strive.school</p>
              </div>
              <div className="d-flex flex-column gap-2 align-items-sm-end">
                <a className="text-decoration-none custom-anchor" href="#2323">
                  Update payment info
                </a>
                <a className="text-decoration-none custom-anchor" href="#2323">
                  Billing details
                </a>
              </div>
            </div>
            <hr />
            <div className="d-flex flex-column align-items-sm-end gap-2">
              <a className="text-decoration-none custom-anchor" href="#2323">
                Redeem gift card or promo code
              </a>
              <a className="text-decoration-none custom-anchor" href="#2323">
                Where to buy gift cards
              </a>
            </div>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col md={4}>
            <h2 className="text-body-tertiary fs-5">PLAN DETAILS</h2>
          </Col>

          <Col md={8}>
            <div className="d-flex flex-column flex-md-row justify-content-md-between align-items-start my-2">
              <div className="d-flex align-items-start gap-2">
                <p className="fw-semibold">Premium</p>
                <p>
                  <i className="bi bi-badge-hd"></i>
                </p>
              </div>
              <div>
                <a className="text-decoration-none custom-anchor" href="#2323">
                  Change Plan
                </a>
              </div>
            </div>
          </Col>
        </Row>
        <hr className="mt-1" />
        <Row>
          <Col md={4}>
            <h2 className="text-body-tertiary fs-5">SETTINGS</h2>
          </Col>
          <Col md={8}>
            <div className="d-flex flex-column gap-2 align-items-start">
              <a className="text-decoration-none custom-anchor" href="#23">
                Parental controls
              </a>
              <a className="text-decoration-none custom-anchor" href="#23">
                Test participation
              </a>
              <a className="text-decoration-none custom-anchor" href="#23">
                Manage download device
              </a>
              <a className="text-decoration-none custom-anchor" href="#23">
                Activate a device
              </a>
              <a className="text-decoration-none custom-anchor" href="#23">
                Recent device streaming activity
              </a>
              <a className="text-decoration-none custom-anchor" href="#23">
                Sign out all devices
              </a>
            </div>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col md={4}>
            <h2 className="text-body-tertiary fs-5">MY PROFILE</h2>
          </Col>
          <Col md={8}>
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-start my-3">
              <div className="d-flex align-items-center gap-3">
                <a className="image-profile" href="../index.html">
                  <img
                    className="rounded-3"
                    src={imageProfile}
                    alt="media"
                    style={{ width: "40px", height: "40px" }}
                  />
                </a>
                <p className="fw-semibold">Strive Student</p>
              </div>
              <div className="d-flex flex-column gap-2 align-items-md-end my-2">
                <a className="text-decoration-none custom-anchor" href="#23">
                  Manage profiles
                </a>
                <a className="text-decoration-none custom-anchor" href="#23">
                  Add profile email
                </a>
              </div>
            </div>
            <Row>
              <Col md={6}>
                <div className="d-flex flex-column align-items-start gap-2">
                  <a className="text-decoration-none custom-anchor" href="#23">
                    Language
                  </a>
                  <a className="text-decoration-none custom-anchor" href="#23">
                    Playback settings
                  </a>
                  <a className="text-decoration-none custom-anchor" href="#23">
                    Subtitle appearance
                  </a>
                </div>
              </Col>
              <Col md={6}>
                <div className="d-flex flex-column align-items-start gap-2">
                  <a className="text-decoration-none custom-anchor" href="#23">
                    Viewing activity
                  </a>
                  <a className="text-decoration-none custom-anchor" href="#23">
                    Ratings
                  </a>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default AccountSettings;
