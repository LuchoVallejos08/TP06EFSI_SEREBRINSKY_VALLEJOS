import noPoster from "../../assets/noPoster.png";

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

    <div style={styles.card}>

         <img
  src={movie.Poster}
  alt={movie.Title}
  style={styles.poster}
  onError={(e) => {
    e.target.src = noPoster;
  }}
/>

      <p>
        <span>Título:</span> {movie.Title}
      </p>

      <p>
        <span>Año:</span> {movie.Year}
      </p>

      <button
        style={styles.button}
        onClick={handleDetail}
      >
        Ver detalle
      </button>

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