import { Component } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  ButtonGroup,
  ToggleButton,
} from "react-bootstrap";

class TVShowsHeader extends Component {
  state = {
    selected: "",
  };

  toggleButton = (value) => {
    this.setState({ selected: value });
  };
  render() {
    return (
      <Container>
        <Row
          className="justify-content-between align-items-center"
          xs={1}
          sm={2}
        >
          <Col>
            <div className="d-flex align-items-center justify-content-between justify-content-sm-start gap-4 ">
              <div>
                <Form.Label
                  className="fw-semibold fs-1 text-white"
                  htmlFor="selectElement"
                >
                  TV Shows
                </Form.Label>
              </div>
              <div>
                <Form.Select
                  className="form-select"
                  id="selectElement"
                  aria-label="Default select example"
                  data-bs-theme="dark"
                >
                  <option>Genres</option>
                  <option value="1">Action</option>
                  <option value="2">War</option>
                  <option value="3">Fantasy</option>
                </Form.Select>
              </div>
            </div>
          </Col>
          <Col className="d-flex align-items-center justify-content-end">
            <ButtonGroup
              className="d-none d-sm-block"
              role="group"
              aria-label="Basic radio toggle button group"
            >
              <ToggleButton
                type="radio"
                variant="outline-secondary"
                name="btnradio"
                value="1"
                onClick={() => this.toggleButton("1")}
                checked={this.state.selected === "1"}
              >
                <i className="bi bi-text-left"></i>
              </ToggleButton>
              <ToggleButton
                type="radio"
                variant="outline-secondary"
                name="btnradio"
                value="2"
                onClick={() => this.toggleButton("2")}
                checked={this.state.selected === "2"}
              >
                <i className="bi bi-grid"></i>
              </ToggleButton>
            </ButtonGroup>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default TVShowsHeader;
