import React, { Component } from "react";
import CustomNavbar from "../Components/MyNavbar";
import Footer from "../Components/MyFooter";
import MySectionTv from "../Components/MySectionTv";
import MyCarousel from "../Components/MyCarousel";
import { Alert, Container } from "react-bootstrap";
import VideoBanner from "../Components/MyVideoBanner";

class Home extends Component {
  state = {
    isError: false,
  };

  handleError = () => {
    this.setState({ isError: true });
  };

  handleGet = () => {
    this.setState({ isError: false });
  };
  render() {
    return (
      <>
        <CustomNavbar />
        <VideoBanner />
        <MySectionTv />
        <MyCarousel
          title="Harry Potter"
          search="harry potter"
          onError={this.handleError}
          onGet={this.handleGet}
        />
        <MyCarousel
          title="Lord of Rings"
          search="Lord of rings"
          onError={this.handleError}
          onGet={this.handleGet}
        />
        <MyCarousel
          title="Transformers"
          search="Transformers"
          onError={this.handleError}
          onGet={this.handleGet}
        />
        <MyCarousel
          title="Avengers"
          search="Avengers"
          onError={this.handleError}
          onGet={this.handleGet}
        />
        <MyCarousel
          title="Pirates of the Caribbean"
          search="pirates of the caribbean"
          onError={this.handleError}
          onGet={this.handleGet}
        />
        <MyCarousel
          title="Plutone"
          search="Plutone"
          onError={this.handleError}
          onGet={this.handleGet}
        />
        {this.state.isError && (
          <Container>
            <Alert variant="danger">Si è verificato un errore</Alert>
          </Container>
        )}
        <Footer />
      </>
    );
  }
}

export default Home;
