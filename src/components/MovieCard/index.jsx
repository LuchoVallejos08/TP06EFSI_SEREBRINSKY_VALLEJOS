import noPoster from "../../assets/noPoster.png";
import "./MovieCard.css";

const MovieCard = ({
  movie,
  setSelectedMovie,
  setOpenModal
}) => {

  const handleDetail = () => {

    setSelectedMovie(movie);

    setOpenModal(true);

  };

 return (

  <div className="movie">

    <div className="movie__poster-container">

      <img
        src={movie.Poster}
        alt={movie.Title}
        className="movie__poster"
        onError={(e) => {
          e.target.src = noPoster;
        }}
      />

    </div>

    <div className="movie__info">

      <h2 className="movie__title">
        {movie.Title}
      </h2>

      <p className="movie__year">
        {movie.Year}
      </p>

      <button
        className="movie__button"
        onClick={handleDetail}
      >
        View details
      </button>

    </div>

  </div>

);

};

const styles = {

  card: {

    border: "1px solid lightgray",

    borderRadius: "10px",

    padding: "15px",

    width: "250px",

    textAlign: "center",

    margin: "15px"

  },

  poster: {

    width: "100%",

    borderRadius: "10px",

    marginBottom: "10px"

  },

  button: {

    marginTop: "10px",

    padding: "10px 15px",

    border: "none",

    borderRadius: "8px",

    backgroundColor: "black",

    color: "white",

    cursor: "pointer"

  }

};

export default MovieCard;