import React, { Component } from 'react';
import { Container, Row, Col, Button, ListGroup } from 'react-bootstrap';

class Footer extends Component {
  render() {
    const currentYear = new Date().getFullYear();

    return (
      <footer>
        <Container className="footer-container text-secondary">
          <Row>
            <Col className="d-flex gap-3 fs-4">
              <a className="text-secondary text-decoration-none" href="#23">
                <i className="bi bi-facebook"></i>
              </a>
              <a className="text-secondary text-decoration-none" href="#23">
                <i className="bi bi-instagram"></i>
              </a>
              <a className="text-secondary text-decoration-none" href="#23">
                <i className="bi bi-twitter-x"></i>
              </a>
              <a className="text-secondary text-decoration-none" href="#23">
                <i className="bi bi-youtube"></i>
              </a>
            </Col>
          </Row>
          <Row className="my-3">
            <Col xs={6} md={3}>
              <ListGroup data-bs-theme="dark" variant='flush'>
                <ListGroup.Item className='custom-listGroupItem'>
                  <a className="text-secondary text-decoration-none" href="#23">
                    Audio and Subtitles
                  </a>
                </ListGroup.Item>
                <ListGroup.Item className='custom-listGroupItem'>
                  <a className="text-secondary text-decoration-none" href="#23">
                    Media Center
                  </a>
                </ListGroup.Item>
                <ListGroup.Item className='custom-listGroupItem'>
                  <a className="text-secondary text-decoration-none" href="#23">
                    Privacy
                  </a>
                </ListGroup.Item>
                <ListGroup.Item className='custom-listGroupItem'>
                  <a className="text-secondary text-decoration-none" href="#23">
                    Contact Us
                  </a>
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col xs={6} md={3}>
              <ListGroup data-bs-theme="dark" variant='flush'>
                <ListGroup.Item className='custom-listGroupItem'>
                  <a className="text-secondary text-decoration-none" href="#23">
                    Audio Description
                  </a>
                </ListGroup.Item>
                <ListGroup.Item className='custom-listGroupItem'>
                  <a className="text-secondary text-decoration-none" href="#23">
                    Investor Relations
                  </a>
                </ListGroup.Item>
                <ListGroup.Item className='custom-listGroupItem'>
                  <a className="text-secondary text-decoration-none" href="#23">
                    Legal Notices
                  </a>
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col xs={6} md={3}>
              <ListGroup data-bs-theme="dark" variant='flush'>
                <ListGroup.Item className='custom-listGroupItem'>
                  <a className="text-secondary text-decoration-none" href="#23">
                    Help Center
                  </a>
                </ListGroup.Item >
                <ListGroup.Item className='custom-listGroupItem'>
                  <a className="text-secondary text-decoration-none" href="#23">
                    Jobs
                  </a>
                </ListGroup.Item>
                <ListGroup.Item className='custom-listGroupItem'>
                  <a className="text-secondary text-decoration-none" href="#23">
                    Cookie Preferences
                  </a>
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col xs={6} md={3}>
              <ListGroup data-bs-theme="dark" variant='flush'>
                <ListGroup.Item className='custom-listGroupItem'>
                  <a className="text-secondary text-decoration-none" href="#23">
                    Gift Cards
                  </a>
                </ListGroup.Item>
                <ListGroup.Item className='custom-listGroupItem'>
                  <a className="text-secondary text-decoration-none" href="#23">
                    Terms of Use
                  </a>
                </ListGroup.Item>
                <ListGroup.Item className='custom-listGroupItem'>
                  <a className="text-secondary text-decoration-none" href="#23">
                    Corporate Information
                  </a>
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button variant="outline-secondary">Service Code</Button>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col>
              <p>
                &copy; 1997-{currentYear} Netflix, Inc.
              </p>
            </Col>
          </Row>
        </Container>
      </footer>
    );
  }
}

export default Footer;
