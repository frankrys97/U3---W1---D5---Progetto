import { Component } from "react";
import { Alert, Container, Spinner } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class Carousel extends Component {
  state = {
    movies: [],
    isLoading: false,
    isError: false,
  };

  fetchMovies = () => {
    const movieUrl = `http://www.omdbapi.com/?i=tt3896198&apikey=895d39b1&s=${this.props.search}`;
    this.setState({ isLoading: true });
    fetch(movieUrl)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw Error(response.statusText);
        }
      })
      .then((data) => {
        data.Search && this.setState({ movies: data.Search });
        console.log(data);

        this.props.onGet();
      })
      .catch((error) => {
        console.log(error);
        this.setState({ isError: true });
        this.props.onError();
      })
      .finally(() => {
        this.setState({ isLoading: false });
      });
  };

  componentDidMount() {
    this.fetchMovies();
  }
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 6,
      speed: 500,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 4,
          },
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 2,
          },
        },
      ],
    };

    if (this.state.isError) {
      return null;
    }

    // Ho preferito optare per una gestione diversa del caso dell'errore poichè a livello di UI preferivo che se la fetch 
    // avesse avuto qualche bug venisse visualizzato un singolo messaggio di errore nella pagina e non una per ogni singola 
    // chiamata.
    // A differenza di quando ci torna un array vuoto che in quel caso ho preferito gestire 
    // singolarmente le chiamate indicando che per quella saga non erano disponibili titoli.

    return (
      <Container className="my-3">
        <h3 className="text-white">{this.props.title}</h3>
        {this.state.isLoading && (
          <Spinner animation="border" variant="danger" />
        )}
        {this.state.movies.length === 0 && !this.state.isLoading && (
          <Alert variant="info">
            There are no movies for <strong>{this.props.search}</strong>
          </Alert>
        )}

        {!this.state.isLoading && this.state.movies.length > 0 && (
          <div className="slider-container">
            <Slider {...settings}>
              {this.state.movies.map((movie) => (
                <div key={movie.imdbID}  className="slider-item">
                  <img
                    className="carousel-img img-fluid"
                    src={movie.Poster}
                    alt={movie.Title}
                  /> 
                  {/* Ho dato alle immagini un aspect ratio di 3/4 per renderle visivamente più leggibili in quanto l'API
                  ci forniva immagini in formato verticale, quindi se avessimo optato per un layout simile a quello
                  di Netflix, le immagini sarebbero state tagliate in modo "brutale" */}
                </div>
              ))}
            </Slider>
          </div>
        )}
      </Container>
    );
  }
}

export default Carousel;
