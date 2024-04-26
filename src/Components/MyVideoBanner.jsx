import React, { Component } from "react";
import { Container, Button } from "react-bootstrap";
import video from "../Netflix-assets/video.mp4"

class VideoBanner extends Component {
  state = {
    isMuted: true,
  };

  toggleMute = () => {
    this.setState((prevState) => ({
      isMuted: !prevState.isMuted,
    }));
  };

  render() {
    return (
      <Container className="position-relative mt-3">
        <video
          id="Film"
          className="w-100 h-100"
          autoPlay
          muted={this.state.isMuted}
          loop
        >
          <source src={video} type="video/mp4" />
        </video>

        <div className="text-white position-absolute bottom-0 mb-4 d-flex justify-content-start align-items-center">
          <div className="ms-4 d-flex flex-column justify-content-center align-items-start">
            <h1 className="d-none d-md-block">How I met your mother</h1>
            <p className="lh-1 d-none d-lg-block fs-7 p-3">
              Nell'anno 2030 Ted Mosby, un affermato architetto, inizia a
              raccontare ai suoi due figli gli eventi che, a partire da
              venticinque anni prima, lo hanno portato a conoscere quella che
              sarebbe diventata la sua futura moglie e loro madre. Ted inizia
              così a ricordare di quando, nel 2005, era soltanto un giovane
              single a New York, ancora alla ricerca dell'anima gemella.
              All'epoca viveva insieme ai suoi storici amici Marshall Eriksen e
              Lily Aldrin, una giovane coppia di innamorati, fidanzati dai tempi
              del college. La loro combriccola era completata da Barney Stinson,
              un ricco e impenitente donnaiolo conosciuto per caso. Ted inizia
              il suo racconto dal giorno in cui ha conosciuto Robin Scherbatsky,
              una ragazza canadese appena arrivata in città, reporter in una
              piccola emittente televisiva locale, che presto si unisce al loro
              gruppo e con la quale il giovane instaura un complicato rapporto
              di amicizia/amore. Usando come pretesto il ricordo del primo
              incontro con la loro madre Ted racconta
            </p>
            <div>
              <Button
                type="button"
                variant="outline-light"
                className="d-none d-sm-inline-block"
              >
                <i className="bi bi-play-fill"></i>
                <span>Guarda</span>
              </Button>
              <Button
                type="button"
                variant="outline-light"
                onClick={this.toggleMute}
              >
                <i
                  className={`bi ${
                    this.state.isMuted
                      ? "bi-volume-mute-fill"
                      : "bi-volume-up-fill"
                  }`}
                ></i>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    );
  }
}

export default VideoBanner;
